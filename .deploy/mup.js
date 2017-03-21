module.exports = {
  servers: {
    one: {
      host: '139.59.62.238',
      username: 'root',
      // pem:
      password: '2c1t3012'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'grosr',
    path: '../',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      PORT: 3000,
      ROOT_URL: 'http://qa.grosr.com',
      MONGO_URL: 'mongodb://localhost/meteor',
    },

    // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60,
    
    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

  mongo: {
    oplog: true,
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {},
    },
  },
};
