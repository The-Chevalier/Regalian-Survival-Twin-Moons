// priority: 0

console.info('Regalian Survival Loot Tables 2 Added')

LootJS.modifiers((event) => {
		event
			.addBlockLootModifier('kubejs:fluorite_ore')
			.removeLoot('kubejs:fluorite_ore')
			.addLoot('kubejs:fluorite')
			.applyOreBonus('minecraft:fortune')
			.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
			.removeLoot('kubejs:fluorite')
			.addLoot('kubejs:fluorite_ore')
});

LootJS.modifiers((event) => {
		event
			.addBlockLootModifier('kubejs:ruby_ore')
			.removeLoot('kubejs:ruby_ore')
			.addLoot('kubejs:ruby')
			.applyOreBonus('minecraft:fortune')
			.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
			.removeLoot('kubejs:ruby')
			.addLoot('kubejs:ruby_ore')
});

LootJS.modifiers((event) => {
		event
			.addBlockLootModifier('kubejs:jade_ore')
			.removeLoot('kubejs:jade_ore')
			.addLoot('kubejs:jade')
			.applyOreBonus('minecraft:fortune')
			.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
			.removeLoot('kubejs:jade')
			.addLoot('kubejs:jade_ore')
});

	LootJS.modifiers((event) => {
		event
			.addBlockLootModifier('kubejs:jasper_ore')
			.removeLoot('kubejs:jasper_ore')
			.addLoot('kubejs:jasper')
			.applyOreBonus('minecraft:fortune')
			.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
			.removeLoot('kubejs:jasper')
			.addLoot('kubejs:jasper_ore')
});

LootJS.modifiers((event) => {
	event
		.addBlockLootModifier('kubejs:cassiterite_ore')
		.removeLoot('kubejs:cassiterite_ore')
		.addLoot('kubejs:raw_cassiterite')
		.applyOreBonus('minecraft:fortune')
		.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
		.removeLoot('kubejs:raw_cassiterite')
		.addLoot('kubejs:cassiterite_ore')
});

LootJS.modifiers((event) => {
	event
		.addBlockLootModifier('kubejs:amalgam_ore')
		.removeLoot('kubejs:amalgam_ore')
		.addLoot('2x kubejs:amalgamated_metal')
		.applyOreBonus('minecraft:fortune')
		.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
		.removeLoot('kubejs:amalgamated_metal')
		.addLoot('kubejs:amalgam_ore')
});

LootJS.modifiers((event) => {
	event
		.addBlockLootModifier('kubejs:scrap_metal_ore')
		.removeLoot('kubejs:scrap_metal_ore')
		.addLoot('4x tetra:metal_scrap')
		.applyOreBonus('minecraft:fortune')
		.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
		.removeLoot('tetra:metal_scrap')
		.addLoot('kubejs:scrap_metal_ore')
});

LootJS.modifiers((event) => {
	event
		.addBlockLootModifier('kubejs:uradyne_ore')
		.removeLoot('kubejs:uradyne_ore')
		.addLoot('kubejs:raw_uradyne_ore')
		.applyOreBonus('minecraft:fortune')
		.randomChanceWithEnchantment('minecraft:silk_touch', [0, 1])
		.removeLoot('kubejs:raw_uradyne_ore')
		.addLoot('kubejs:uradyne_ore')
});


LootJS.modifiers((event) => {
	event
		.addBlockLootModifier('minecraft:end_portal_frame')
		.randomChance(0.9)
		.addLoot('minecraft:end_portal_frame')
});
