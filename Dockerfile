FROM node:10.16.3-jessie
WORKDIR /src
ADD . .

RUN npm install -g @angular/cli

ENV PORT=4200
ENV AWS_ACCESS_KEY_ID=
ENV AWS_SECRET_ACCESS_KEY=
ENV AWS_REGION=
ENV HOST_ENV=uat.puntoscolombia.com
ENV NODE_ENV = development

EXPOSE 4200
CMD ng serve --host 0.0.0.0
