// Copyright 2002-2013, University of Colorado Boulder

/**
 * The 'Bar Magnet' screen. Conforms to the contract specified in joist/Screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // imports
  var BarMagnetModel = require( 'barmagnet/model/BarMagnetModel' );
  var BarMagnetView = require( 'barmagnet/view/BarMagnetView' );
  var ExampleSimStrings = require( 'common/ExampleSimStrings' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  function BarMagnetScreen() {

    this.name = ExampleSimStrings.exampleSim;
    this.backgroundColor = 'rgb(50,50,50)'; // dark gray

    this.createModel = function() {
      return new BarMagnetModel();
    };

    this.createView = function( model ) {
      return new BarMagnetView( model );
    };
  }


  return BarMagnetScreen;
} );