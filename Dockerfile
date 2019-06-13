FROM node

#RUN apk update && apk add nginx bash curl ca-certificates openssl ncurses coreutils python2 make gcc g++ libgcc linux-headers grep util-linux binutils findutils

#nodejs-npm
#RUN touch /root/.bashrc
#RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
#RUN . /root/.nvm/nvm.sh && nvm install -s node && nvm use node
#RUN . /root/.nvm/nvm.sh && npm -v

RUN mkdir /srv/ssr-webpack/
COPY package.json package-lock.json /srv/ssr-webpack/

RUN . /root/.nvm/nvm.sh && cd /srv/ssr-webpack/; npm i -g yarn && yarn install

COPY . /srv/ssr-webpack

#RUN . /root/.nvm/nvm.sh && cd /srv/ssr-webpack/; npm run build:client && npm run build:server
RUN cd /srv/ssr-webpack/; npm run build:client && npm run build:server

WORKDIR /srv/ssr-webpack
#CMD . /root/.nvm/nvm.sh && npm run start
CMD npm run start



