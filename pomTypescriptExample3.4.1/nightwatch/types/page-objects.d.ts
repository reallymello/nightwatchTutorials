import 'nightwatch';
import { GoogleResultsPage, GoogleSearchPage } from '../page-objects';

export interface CustomPageObjects {
  Google: {
    GoogleResultsPage: () => GoogleResultsPage;
    GoogleSearchPage: () => GoogleSearchPage;
  };
}
