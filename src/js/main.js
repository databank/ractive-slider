
Ractive.components.slider = Ractive.extend({
	isolated: true,
	template: `
	<div class="dbk-slider {{class}}" style="{{style}}">
		<input type="range" min="{{min}}" max="{{max}}" value="{{value}}" step="{{step}}" id="{{id}}">
	</div>
	`
});
Ractive.components.range = Ractive.extend({
	isolated: true,
	template: `
	<div class="dbk-slider {{class}}" style="{{style}}">
		<input type="range" min="{{min}}" max="{{max}}" value="{{value_from}}"  step="{{step}}" id="{{id}}">
		<input type="range" min="{{min}}" max="{{max}}" value="{{value_to}}"    step="{{step}}" id="{{id}}">
	</div>
	`
});
