'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.core.pipeline.stage.pipeline', [
  require('./pipelineStage.js'),
  require('../stage.module.js'),
  require('../core/stage.core.module.js'),
  require('core/utils/timeFormatters.js'),
  require('./pipelineExecutionDetails.controller.js'),
  require('core/widgets/spelText/spelSelect.component'),
]);
