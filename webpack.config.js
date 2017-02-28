var webpack = require('webpack');//Load webpack utilities to use for the "plugins" section

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',//The "script! is for the script-loader to update the scripts files as a package in the webconfig file"
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  //Tells that when we see '$' or 'jQuery' replace them with jquery module
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ['','.js','.jsx']
  },

//For webpack being able to interpret ES6 jsx files using babel-loader
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']//Must add stage-0 so we can use ES6 feature (...)
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' //For debugging purposes makes it easier to debug (much smaller file)
};
