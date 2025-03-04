FROM node:20


USER node


RUN git clone https://github.com/hakisolos/nikka-v3.2 home/node/blue


WORKDIR /home/node/blue


RUN chmod -R 777 /home/node/blue/


RUN yarn install && yarn add http


COPY haki.js .


COPY haki.sh .


CMD ["bash","haki.sh" ]
