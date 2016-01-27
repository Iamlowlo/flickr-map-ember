import Ember from 'ember';

export default Ember.Controller.extend({
	flickr : Ember.inject.service('flickr'),
	init() {
		this.get('flickr');
	},
	pictures : Ember.computed.alias('flickr.pictures'),
	actions : {
		getPictures : function(){
			this.get('flickr').refreshPictures();
		}
	}
});
