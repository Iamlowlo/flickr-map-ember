import Ember from 'ember';

export default Ember.Controller.extend({
	links : [
		{ 	link : 'index',
			label : 'Inicio'
		},
		{ 	link : 'map',
			label : 'Mapa'
		}/*,
		{ 	link : 'favs',
			label : 'Favoritas'
		}*/
	]
});
