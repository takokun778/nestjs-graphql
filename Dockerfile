FROM ubuntu:20.04

ARG UID=${UID}

ARG GID=${GID}

ARG UNAME=${UNAME}

RUN apt update

RUN apt install curl git -y

RUN curl -o nodejs.deb https://deb.nodesource.com/node_16.x/pool/main/n/nodejs/nodejs_16.0.0-deb-1nodesource1_amd64.deb

RUN apt install -y ./nodejs.deb

RUN rm nodejs.deb && rm -rf /var/lib/apt/lists/

RUN npm install -g @nestjs/cli

RUN groupadd -g ${GID} ${UNAME} && useradd -u ${UID} ${UNAME} -g ${UNAME}

USER ${UID}

WORKDIR /home/${UNAME}/app/
