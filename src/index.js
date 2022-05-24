import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
import { registerCoreBlocks } from '@wordpress/block-library';
import * as paragraph from '@wordpress/block-library/build/paragraph';
import App from './App';

import './index.css';

domReady( function() {
	const settings = window.getdaveSbeSettings || {};
	registerCoreBlocks([paragraph]);
	render( <App settings={ settings } />, document.getElementById( 'root' ) );
} );
