FROM node:10.16.3-jessie
WORKDIR /src
ADD . .

RUN npm install -g @angular/cli

ENV PORT=4200
ENV NODE_ENV = development

EXPOSE 4200
CMD ng serve --host 0.0.0.0 --disableHostCheck true
