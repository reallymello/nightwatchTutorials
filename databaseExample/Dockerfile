FROM microsoft/mssql-server-linux:latest

RUN mkdir -p /opt/scripts
COPY database.sql /opt/scripts

ENV MSSQL_SA_PASSWORD=ThisIsAStrongP@assword!SortOf
ENV ACCEPT_EULA=Y

RUN /opt/mssql/bin/sqlservr --accept-eula & sleep 30  & /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'ThisIsAStrongP@assword!SortOf' -d master -i /opt/scripts/database.sql 