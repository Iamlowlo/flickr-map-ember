import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
	pictures : null,
	mainUrl : config.APP.flickr.api_url+'api_key='+config.APP.flickr.api_key+'&format=json&nojsoncallback=1',
	urlOptions : '',
	init(){
		this.set('pictures', []);
	},
	refreshPictures(){
		let date = new Date();
		let min_upload_date = new Date(date.getFullYear(),date.getMonth(),date.getDate()-1);
		let urlOptions = '&method=flickr.photos.search';
		urlOptions += '&min_upload_date='+min_upload_date.getTime()/1000;
		urlOptions += '&has_geo=1';
		urlOptions += '&extras=geo,url_s,url_m';
		urlOptions += '&lat='+config.APP.locations.madrid.lat;
		urlOptions += '&lon='+config.APP.locations.madrid.lng;
		urlOptions += '&radius=6';
		this.set('urlOptions',urlOptions) ;
		let url = this.get('mainUrl')+this.get('urlOptions');
		let self = this;

		Ember.$.ajax({
			url : url,
			dataType : "json",
			crossDomain : true,
			success : function(data, status){
				//console.log('success',data, status);
				
				self.set('pictures',data.photos.photo);
			},
			error : function(data, status){
				console.log('Error',data, status);
			}
		})
	},

});
