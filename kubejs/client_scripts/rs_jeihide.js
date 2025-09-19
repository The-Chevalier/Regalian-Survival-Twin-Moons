// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

//These will only refresh on restart!!!

onEvent('jei.hide.items', event => {
	event.hide('easypaxellite:wood_paxel')
	event.hide('easypaxellite:iron_paxel')
	event.hide('easypaxellite:golden_paxel')
	event.hide('easypaxellite:diamond_paxel')
	event.hide('easypaxellite:netherite_paxel')
	event.hide('easypaxellite:netherite_paxel_ingot')
	event.hide('nomadictents:tiny_indlu') // Removes indlu tent
	event.hide('nomadictents:small_indlu') // Removes indlu tent
	event.hide('nomadictents:medium_indlu') // Removes indlu tent
	event.hide('nomadictents:large_indlu') // Removes indlu tent
	event.hide('nomadictents:giant_indlu') // Removes indlu tent
	event.hide('nomadictents:mega_indlu') // Removes indlu tent
	event.hide('nomadictents:indlu_section') // Removes indlu tent
	event.hide('nomadictents:mallet') // Removes obsidian tent mallet
	event.hide('minecraft:iron_pickaxe')
	event.hide('minecraft:iron_shovel')
	event.hide('minecraft:iron_hoe')
	event.hide('minecraft:golden_pickaxe')
	event.hide('minecraft:golden_shovel')
	event.hide('minecraft:golden_hoe')
	event.hide('minecraft:diamond_pickaxe')
	event.hide('minecraft:diamond_shovel')
	event.hide('minecraft:diamond_hoe')
	event.hide('minecraft:netherite_pickaxe')
	event.hide('minecraft:netherite_shovel')
	event.hide('minecraft:netherite_hoe')
	event.hide('undergarden:cloggrum_pickaxe')
	event.hide('undergarden:cloggrum_shovel')
	event.hide('undergarden:cloggrum_hoe')
	event.hide('undergarden:utherium_pickaxe')
	event.hide('undergarden:utherium_shovel')
	event.hide('undergarden:utherium_hoe')
	event.hide('undergarden:froststeel_pickaxe')
	event.hide('undergarden:froststeel_shovel')
	event.hide('undergarden:froststeel_hoe')
	event.hide('undergarden:forgotten_pickaxe')
	event.hide('undergarden:forgotten_shovel')
	event.hide('undergarden:forgotten_hoe')
	event.hide('enlightened_end:adamantite_pickaxe')
	event.hide('enlightened_end:adamantite_shovel')
	event.hide('enlightened_end:adamantite_hoe')
  })