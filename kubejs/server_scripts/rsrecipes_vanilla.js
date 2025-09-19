// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes((event) => {
	// Change recipes here

	// Prismarine Shards from Block Prismarine
	event.shapeless('4x minecraft:prismarine_shard', 'minecraft:prismarine')

	// Prismarine Crystals from Shard and Glowstone
	event.shapeless('2x minecraft:prismarine_crystals', ['minecraft:prismarine_shard', '#forge:dusts/glowstone'])
	
	event.shaped('minecraft:turtle_helmet', [
		'XXX',
		'XCX'
	  ], {
		X: 'minecraft:scute',
		C: 'minecraft:chainmail_helmet'
	  })

})

//onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
//})