FROM node:8.9

RUN yarn global add exp@53.1.0

WORKDIR /package

# Utilise docker layer caching for Expo fork of react-native
RUN wget -q https://github.com/expo/react-native/archive/sdk-27.0.0.tar.gz
RUN tar zxf sdk-27.0.0.tar.gz

RUN yarn global add react-native-debugger-open

WORKDIR /code/Project

ADD ./Project/package.json /code/Project/package.json
ADD ./Project/yarn.lock /code/Project/yarn.lock

RUN yarn install --frozen-lockfile

ADD ./Project /code/Project
