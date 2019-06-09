Ractive.components.slider = Ractive.extend({
	isolated: true,
	template: `
	<div class="dbk-slider {{class}}" style="{{style}}">
		<input type="range" min="{{min}}" max="{{max}}" value="{{value}}" step="{{step}}" id="{{id}}" {{#if disabled}}disabled{{/if}}>
	</div>
	`
});
Ractive.components.range = Ractive.extend({
	isolated: true,
	template: `
	<div class="dbk-slider {{class}}" style="{{style}}">
		<input type="range" min="{{min}}" max="{{max}}" value="{{value_from}}"  step="{{step}}" id="{{id}}" {{#if disabled}}disabled{{/if}}>
		<input type="range" min="{{min}}" max="{{max}}" value="{{value_to}}"    step="{{step}}" id="{{id}}" {{#if disabled}}disabled{{/if}}>
	</div>
	`
});
