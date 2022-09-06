module.exports = class GetEmailBody {
  async command(inboxId, searchValue = '') {
    let returnValue;
    try {
      returnValue = await getEmailBody(inboxId, searchValue);
    } catch (err) {
      console.error(
        'An error occurred while retrieving messages from MailTrap',
        err.message
      );
      returnValue = {
        status: -1,
        error: err.message,
      };
    }

    return returnValue;
  }
};

const getEmailBody = async (inboxId, searchValue = '') => {
  const superagent = require('superagent');
  let messages = await superagent
    .get(
      `https://mailtrap.io/api/v1/inboxes/${inboxId}/messages?search=${searchValue}`
    )
    .set('Api-Token', '72e6583104bd1ed04488763de3801f21')
    .then((res) => {
      return JSON.parse(res.text);
    })
    .catch((err) => {
      console.err(err.message);
      return [];
    });

  if (messages.length > 0) {
    const cheerio = require('cheerio');
    let htmlBody = await superagent
      .get(`https://mailtrap.io/${messages[0].html_path}`)
      .set('Api-Token', '72e6583104bd1ed04488763de3801f21')
      .set('Content-type', 'application/html')
      .then((res) => {
        const $ = cheerio.load(res.text);
        return $('a').attr('href');
      })
      .catch((err) => {
        console.err(err.message);
        return err.message;
      });
    return htmlBody;
  } else {
    return '';
  }
};
