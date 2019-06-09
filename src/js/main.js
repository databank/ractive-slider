Ractive.components.slider = Ractive.extend({
	isolated: true,
	template: `
    <div class="dbk-slider {{class}}" style="{{style}}">
      <input type="range" min="{{min}}" max="{{max}}" value="{{value}}" step="{{step}}" id="{{id}}">
    </div>  
  `
});
