// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes((event) => {
	// Change recipes here



	// 2x slabs -> 1x plank through shaped crafting
	event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, r => {
		let ingredients = r.originalRecipeIngredients // returns a List<Ingredient>
		let output = r.originalRecipeResult           // returns an ItemStack
		event.shaped(ingredients[0], ['S', 'S'], { S: output })
	})

	// 1x stair -> 1x plank through stonecutting
	event.forEachRecipe({ type: 'minecraft:stonecutting', output: '#minecraft:stairs' }, r => {
		let ingredients = r.originalRecipeIngredients
		let output = r.originalRecipeResult
		event.stonecutting(ingredients[0], output)
	})


	let multiSmelt = (output, input) => {
		event.remove({ output: output, type: 'smelting' })
		event.remove({ output: output, type: 'blasting' })
		event.smelting(output, input)
		event.blasting(output, input)

	}
	multiSmelt(Item.of('minecraft:iron_ingot', 2), 'create:crushed_raw_iron')
	multiSmelt(Item.of('minecraft:copper_ingot', 2), 'create:crushed_raw_copper')
	multiSmelt(Item.of('create:zinc_ingot', 2), 'create:crushed_raw_zinc')
	multiSmelt(Item.of('kubejs:tin_ingot', 2), 'kubejs:crushed_cassiterite_ore')
	multiSmelt(Item.of('minecraft:gold_ingot', 2), 'create:crushed_raw_gold')

	let multiCook = (output, input) => {
		event.remove({ output: output, type: 'smelting' })
		event.remove({ output: output, type: 'smoking' })
		event.smelting(output, input)
		event.smoking(output, input)

	}
	multiCook('kubejs:fillet_gullie', 'kubejs:speciality_gullhorn_cut')


	let stoneCut = (output, input) => {
		event.stonecutting(output, input)

	}
	stoneCut('kubejs:industrial_mesh_single_border', 'kubejs:industrial_mesh')
	stoneCut('kubejs:industrial_mesh_platform', 'kubejs:industrial_mesh')
	stoneCut('2x kubejs:industrial_mesh_slab', 'kubejs:industrial_mesh')
	stoneCut('kubejs:industrial_mesh_stairs', 'kubejs:industrial_mesh')

	stoneCut('kubejs:industrial_mesh', 'kubejs:industrial_mesh_single_border')
	stoneCut('kubejs:industrial_mesh_platform', 'kubejs:industrial_mesh_single_border')
	stoneCut('2x kubejs:industrial_mesh_single_border_slab', 'kubejs:industrial_mesh_single_border')
	stoneCut('kubejs:industrial_mesh_single_border_stairs', 'kubejs:industrial_mesh_single_border')

	stoneCut('kubejs:industrial_mesh_single_border', 'kubejs:industrial_mesh_platform')
	stoneCut('kubejs:industrial_mesh', 'kubejs:industrial_mesh_platform')

	stoneCut('kubejs:industrial_wall_bolted_hidden', 'kubejs:industrial_wall_bolted')
	stoneCut('2x kubejs:industrial_wall_bolted_slab', 'kubejs:industrial_wall_bolted')
	stoneCut('kubejs:industrial_wall_bolted_stairs', 'kubejs:industrial_wall_bolted')

	stoneCut('kubejs:industrial_wall_bolted', 'kubejs:industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:industrial_wall_bolted_hidden_slab', 'kubejs:industrial_wall_bolted_hidden')
	stoneCut('kubejs:industrial_wall_bolted_hidden_stairs', 'kubejs:industrial_wall_bolted_hidden')

	stoneCut('kubejs:industrial_scaffold', 'kubejs:industrial_wall_smooth')
	stoneCut('kubejs:industrial_pillar', 'kubejs:industrial_wall_smooth')
	stoneCut('2x kubejs:industrial_wall_smooth_slab', 'kubejs:industrial_wall_smooth')
	stoneCut('kubejs:industrial_wall_smooth_stairs', 'kubejs:industrial_wall_smooth')

	stoneCut('kubejs:industrial_wall_smooth', 'kubejs:industrial_scaffold')
	stoneCut('kubejs:industrial_wall_smooth', 'kubejs:industrial_pillar')

	//Palettes

	//Red
	stoneCut('kubejs:red_industrial_wall_bolted_hidden', 'kubejs:red_industrial_wall_bolted')
	stoneCut('2x kubejs:red_industrial_wall_bolted_slab', 'kubejs:red_industrial_wall_bolted')
	stoneCut('kubejs:red_industrial_wall_bolted_stairs', 'kubejs:red_industrial_wall_bolted')

	stoneCut('kubejs:red_industrial_wall_bolted', 'kubejs:red_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:red_industrial_wall_bolted_hidden_slab', 'kubejs:red_industrial_wall_bolted_hidden')
	stoneCut('kubejs:red_industrial_wall_bolted_hidden_stairs', 'kubejs:red_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:red_industrial_wall_smooth_slab', 'kubejs:red_industrial_wall_smooth')
	stoneCut('kubejs:red_industrial_wall_smooth_stairs', 'kubejs:red_industrial_wall_smooth')

	//Yellow
	stoneCut('kubejs:yellow_industrial_wall_bolted_hidden', 'kubejs:yellow_industrial_wall_bolted')
	stoneCut('2x kubejs:yellow_industrial_wall_bolted_slab', 'kubejs:yellow_industrial_wall_bolted')
	stoneCut('kubejs:yellow_industrial_wall_bolted_stairs', 'kubejs:yellow_industrial_wall_bolted')

	stoneCut('kubejs:yellow_industrial_wall_bolted', 'kubejs:yellow_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:yellow_industrial_wall_bolted_hidden_slab', 'kubejs:yellow_industrial_wall_bolted_hidden')
	stoneCut('kubejs:yellow_industrial_wall_bolted_hidden_stairs', 'kubejs:yellow_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:yellow_industrial_wall_smooth_slab', 'kubejs:yellow_industrial_wall_smooth')
	stoneCut('kubejs:yellow_industrial_wall_smooth_stairs', 'kubejs:yellow_industrial_wall_smooth')

	//Green
	stoneCut('kubejs:green_industrial_wall_bolted_hidden', 'kubejs:green_industrial_wall_bolted')
	stoneCut('2x kubejs:green_industrial_wall_bolted_slab', 'kubejs:green_industrial_wall_bolted')
	stoneCut('kubejs:green_industrial_wall_bolted_stairs', 'kubejs:green_industrial_wall_bolted')

	stoneCut('kubejs:green_industrial_wall_bolted', 'kubejs:green_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:green_industrial_wall_bolted_hidden_slab', 'kubejs:green_industrial_wall_bolted_hidden')
	stoneCut('kubejs:green_industrial_wall_bolted_hidden_stairs', 'kubejs:green_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:green_industrial_wall_smooth_slab', 'kubejs:green_industrial_wall_smooth')
	stoneCut('kubejs:green_industrial_wall_smooth_stairs', 'kubejs:green_industrial_wall_smooth')

	//Blue
	stoneCut('kubejs:blue_industrial_wall_bolted_hidden', 'kubejs:blue_industrial_wall_bolted')
	stoneCut('2x kubejs:blue_industrial_wall_bolted_slab', 'kubejs:blue_industrial_wall_bolted')
	stoneCut('kubejs:blue_industrial_wall_bolted_stairs', 'kubejs:blue_industrial_wall_bolted')

	stoneCut('kubejs:blue_industrial_wall_bolted', 'kubejs:blue_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:blue_industrial_wall_bolted_hidden_slab', 'kubejs:blue_industrial_wall_bolted_hidden')
	stoneCut('kubejs:blue_industrial_wall_bolted_hidden_stairs', 'kubejs:blue_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:blue_industrial_wall_smooth_slab', 'kubejs:blue_industrial_wall_smooth')
	stoneCut('kubejs:blue_industrial_wall_smooth_stairs', 'kubejs:blue_industrial_wall_smooth')

	//Cyan
	stoneCut('kubejs:cyan_industrial_wall_bolted_hidden', 'kubejs:cyan_industrial_wall_bolted')
	stoneCut('2x kubejs:cyan_industrial_wall_bolted_slab', 'kubejs:cyan_industrial_wall_bolted')
	stoneCut('kubejs:cyan_industrial_wall_bolted_stairs', 'kubejs:cyan_industrial_wall_bolted')

	stoneCut('kubejs:cyan_industrial_wall_bolted', 'kubejs:cyan_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:cyan_industrial_wall_bolted_hidden_slab', 'kubejs:cyan_industrial_wall_bolted_hidden')
	stoneCut('kubejs:cyan_industrial_wall_bolted_hidden_stairs', 'kubejs:cyan_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:cyan_industrial_wall_smooth_slab', 'kubejs:cyan_industrial_wall_smooth')
	stoneCut('kubejs:cyan_industrial_wall_smooth_stairs', 'kubejs:cyan_industrial_wall_smooth')

	//Purple
	stoneCut('kubejs:purple_industrial_wall_bolted_hidden', 'kubejs:purple_industrial_wall_bolted')
	stoneCut('2x kubejs:purple_industrial_wall_bolted_slab', 'kubejs:purple_industrial_wall_bolted')
	stoneCut('kubejs:purple_industrial_wall_bolted_stairs', 'kubejs:purple_industrial_wall_bolted')

	stoneCut('kubejs:purple_industrial_wall_bolted', 'kubejs:purple_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:purple_industrial_wall_bolted_hidden_slab', 'kubejs:purple_industrial_wall_bolted_hidden')
	stoneCut('kubejs:purple_industrial_wall_bolted_hidden_stairs', 'kubejs:purple_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:purple_industrial_wall_smooth_slab', 'kubejs:purple_industrial_wall_smooth')
	stoneCut('kubejs:purple_industrial_wall_smooth_stairs', 'kubejs:purple_industrial_wall_smooth')

	//Magenta
	stoneCut('kubejs:magenta_industrial_wall_bolted_hidden', 'kubejs:magenta_industrial_wall_bolted')
	stoneCut('2x kubejs:magenta_industrial_wall_bolted_slab', 'kubejs:magenta_industrial_wall_bolted')
	stoneCut('kubejs:magenta_industrial_wall_bolted_stairs', 'kubejs:magenta_industrial_wall_bolted')

	stoneCut('kubejs:magenta_industrial_wall_bolted', 'kubejs:magenta_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:magenta_industrial_wall_bolted_hidden_slab', 'kubejs:magenta_industrial_wall_bolted_hidden')
	stoneCut('kubejs:magenta_industrial_wall_bolted_hidden_stairs', 'kubejs:magenta_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:magenta_industrial_wall_smooth_slab', 'kubejs:magenta_industrial_wall_smooth')
	stoneCut('kubejs:magenta_industrial_wall_smooth_stairs', 'kubejs:magenta_industrial_wall_smooth')

	//Lime
	stoneCut('kubejs:lime_industrial_wall_bolted_hidden', 'kubejs:lime_industrial_wall_bolted')
	stoneCut('2x kubejs:lime_industrial_wall_bolted_slab', 'kubejs:lime_industrial_wall_bolted')
	stoneCut('kubejs:lime_industrial_wall_bolted_stairs', 'kubejs:lime_industrial_wall_bolted')

	stoneCut('kubejs:lime_industrial_wall_bolted', 'kubejs:lime_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:lime_industrial_wall_bolted_hidden_slab', 'kubejs:lime_industrial_wall_bolted_hidden')
	stoneCut('kubejs:lime_industrial_wall_bolted_hidden_stairs', 'kubejs:lime_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:lime_industrial_wall_smooth_slab', 'kubejs:lime_industrial_wall_smooth')
	stoneCut('kubejs:lime_industrial_wall_smooth_stairs', 'kubejs:lime_industrial_wall_smooth')

	//Brown
	stoneCut('kubejs:brown_industrial_wall_bolted_hidden', 'kubejs:brown_industrial_wall_bolted')
	stoneCut('2x kubejs:brown_industrial_wall_bolted_slab', 'kubejs:brown_industrial_wall_bolted')
	stoneCut('kubejs:brown_industrial_wall_bolted_stairs', 'kubejs:brown_industrial_wall_bolted')

	stoneCut('kubejs:brown_industrial_wall_bolted', 'kubejs:brown_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:brown_industrial_wall_bolted_hidden_slab', 'kubejs:brown_industrial_wall_bolted_hidden')
	stoneCut('kubejs:brown_industrial_wall_bolted_hidden_stairs', 'kubejs:brown_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:brown_industrial_wall_smooth_slab', 'kubejs:brown_industrial_wall_smooth')
	stoneCut('kubejs:brown_industrial_wall_smooth_stairs', 'kubejs:brown_industrial_wall_smooth')

	//Black
	stoneCut('kubejs:black_industrial_wall_bolted_hidden', 'kubejs:black_industrial_wall_bolted')
	stoneCut('2x kubejs:black_industrial_wall_bolted_slab', 'kubejs:black_industrial_wall_bolted')
	stoneCut('kubejs:black_industrial_wall_bolted_stairs', 'kubejs:black_industrial_wall_bolted')

	stoneCut('kubejs:black_industrial_wall_bolted', 'kubejs:black_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:black_industrial_wall_bolted_hidden_slab', 'kubejs:black_industrial_wall_bolted_hidden')
	stoneCut('kubejs:black_industrial_wall_bolted_hidden_stairs', 'kubejs:black_industrial_wall_bolted_hidden')

	stoneCut('2x kubejs:black_industrial_wall_smooth_slab', 'kubejs:black_industrial_wall_smooth')
	stoneCut('kubejs:black_industrial_wall_smooth_stairs', 'kubejs:black_industrial_wall_smooth')

	//Light Gray

	stoneCut('kubejs:light_gray_industrial_mesh_single_border', 'kubejs:light_gray_industrial_mesh')
	stoneCut('kubejs:light_gray_industrial_mesh_platform', 'kubejs:light_gray_industrial_mesh')
	stoneCut('2x kubejs:light_gray_industrial_mesh_slab', 'kubejs:light_gray_industrial_mesh')
	stoneCut('kubejs:light_gray_industrial_mesh_stairs', 'kubejs:light_gray_industrial_mesh')

	stoneCut('kubejs:light_gray_industrial_mesh', 'kubejs:light_gray_industrial_mesh_single_border')
	stoneCut('kubejs:light_gray_industrial_mesh_platform', 'kubejs:light_gray_industrial_mesh_single_border')
	stoneCut('2x kubejs:light_gray_industrial_mesh_single_border_slab', 'kubejs:light_gray_industrial_mesh_single_border')
	stoneCut('kubejs:light_gray_industrial_mesh_single_border_stairs', 'kubejs:light_gray_industrial_mesh_single_border')

	stoneCut('kubejs:light_gray_industrial_mesh_single_border', 'kubejs:light_gray_industrial_mesh_platform')
	stoneCut('kubejs:light_gray_industrial_mesh', 'kubejs:light_gray_industrial_mesh_platform')

	stoneCut('kubejs:light_gray_industrial_wall_bolted_hidden', 'kubejs:light_gray_industrial_wall_bolted')
	stoneCut('2x kubejs:light_gray_industrial_wall_bolted_slab', 'kubejs:light_gray_industrial_wall_bolted')
	stoneCut('kubejs:light_gray_industrial_wall_bolted_stairs', 'kubejs:light_gray_industrial_wall_bolted')

	stoneCut('kubejs:light_gray_industrial_wall_bolted', 'kubejs:light_gray_industrial_wall_bolted_hidden')
	stoneCut('2x kubejs:light_gray_industrial_wall_bolted_hidden_slab', 'kubejs:light_gray_industrial_wall_bolted_hidden')
	stoneCut('kubejs:light_gray_industrial_wall_bolted_hidden_stairs', 'kubejs:light_gray_industrial_wall_bolted_hidden')

	stoneCut('kubejs:light_gray_industrial_scaffold', 'kubejs:light_gray_industrial_wall_smooth')
	stoneCut('kubejs:light_gray_industrial_pillar', 'kubejs:light_gray_industrial_wall_smooth')
	stoneCut('2x kubejs:light_gray_industrial_wall_smooth_slab', 'kubejs:light_gray_industrial_wall_smooth')
	stoneCut('kubejs:light_gray_industrial_wall_smooth_stairs', 'kubejs:light_gray_industrial_wall_smooth')

	stoneCut('kubejs:light_gray_industrial_wall_smooth', 'kubejs:light_gray_industrial_scaffold')
	stoneCut('kubejs:light_gray_industrial_wall_smooth', 'kubejs:light_gray_industrial_pillar')

	//Stained Wood

	stoneCut('kubejs:stained_wood_stairs', 'kubejs:stained_wood')
	stoneCut('2x kubejs:stained_wood_slab', 'kubejs:stained_wood')

	//Remove recipes here
	event.remove({ output: 'minecraft:crafting_table' }) // Removes default Crafting Table recipe
	event.remove({ output: 'tetra:metal_scrap' }) // Removes metal scrap from ancient scrap recipe
	event.remove({ output: 'undergarden:catalyst' }) // Removes metal scrap from ancient scrap recipe
	event.remove({ output: 'nomadictents:bedouin_section' }) // Removes bedouin section recipe
	event.remove({ output: 'nomadictents:tiny_indlu' }) // Removes indlu tent
	event.remove({ output: 'nomadictents:small_indlu' }) // Removes indlu tent
	event.remove({ output: 'nomadictents:medium_indlu' }) // Removes indlu tent
	event.remove({ output: 'nomadictents:large_indlu' }) // Removes indlu tent
	event.remove({ output: 'nomadictents:giant_indlu' }) // Removes indlu tent
	event.remove({ output: 'nomadictents:mega_indlu' }) // Removes indlu tent
	event.remove({ output: 'nomadictents:indlu_section' }) // Removes indlu tent
	event.remove({ output: 'tetra:forged_bolt' }) // Removes bolt recipe
	event.remove({ output: 'tetra:forged_beam' }) // Removes bolt recipe
	event.remove({ output: 'tetra:quick_latch' }) // Removes quick latch
	event.remove({ output: 'tetra:vent_plate' }) // Removes insulated plate	
	event.remove({ output: 'grapplemod:grapplinghook' }) // Removes grappling hook
	event.remove({ output: 'enderstorage:ender_chest' }) // Removes ender storage ender chest
	event.remove({ output: 'enderstorage:ender_tank' }) // Removes ender storage ender tank
	event.remove({ output: 'enderstorage:ender_pouch' }) // Removes ender storage ender pouch
	event.remove({ output: 'minecraft:ender_eye' }) // Removes eye of ender
	event.remove({ output: 'nomadictents:mallet' }) // Removes tent mallet
	event.remove({ output: 'nomadictents:golden_mallet' }) // Removes golden tent mallet
	event.remove({ output: 'minecraft:iron_pickaxe' })
	event.remove({ output: 'minecraft:iron_shovel' })
	event.remove({ output: 'minecraft:iron_hoe' })
	event.remove({ output: 'minecraft:golden_pickaxe' })
	event.remove({ output: 'minecraft:golden_shovel' })
	event.remove({ output: 'minecraft:golden_hoe' })
	event.remove({ output: 'minecraft:diamond_pickaxe' })
	event.remove({ output: 'minecraft:diamond_shovel' })
	event.remove({ output: 'minecraft:diamond_hoe' })
	event.remove({ output: 'minecraft:netherite_pickaxe' })
	event.remove({ output: 'minecraft:netherite_shovel' })
	event.remove({ output: 'minecraft:netherite_hoe' })
	event.remove({ output: 'undergarden:cloggrum_pickaxe' })
	event.remove({ output: 'undergarden:cloggrum_shovel' })
	event.remove({ output: 'undergarden:cloggrum_hoe' })
	event.remove({ output: 'undergarden:utherium_pickaxe' })
	event.remove({ output: 'undergarden:utherium_shovel' })
	event.remove({ output: 'undergarden:utherium_hoe' })
	event.remove({ output: 'undergarden:froststeel_pickaxe' })
	event.remove({ output: 'undergarden:froststeel_shovel' })
	event.remove({ output: 'undergarden:froststeel_hoe' })
	event.remove({ output: 'undergarden:forgotten_pickaxe' })
	event.remove({ output: 'undergarden:forgotten_shovel' })
	event.remove({ output: 'undergarden:forgotten_hoe' })
	event.remove({ output: 'enlightened_end:adamantite_pickaxe' })
	event.remove({ output: 'enlightened_end:adamantite_shovel' })
	event.remove({ output: 'enlightened_end:adamantite_hoe' })
	event.remove({ output: 'minecraft:turtle_helmet' })

	// Blaze Burner
	event.shaped('create:blaze_burner', [
		' M ',
		' I ',
		' B '
	], {
		B: 'create:empty_blaze_burner',
		I: 'kubejs:unpowered_hellion_core',
		M: 'kubejs:advanced_battery'
	})

	event.smelting('1x minecraft:iron_ingot', '1x minecraft:raw_iron')
	event.smelting('1x minecraft:copper_ingot', '1x minecraft:raw_copper')
	event.smelting('1x create:zinc_ingot', '1x create:raw_zinc')
	event.smelting('1x minecraft:gold_ingot', '1x minecraft:raw_gold')


	// Eye of ender
	event.shapeless('1x minecraft:ender_eye', ['1x minecraft:ender_pearl', '1x undergarden:regalium_crystal', '1x minecraft:blaze_powder'])

	// Tetra Bolts
	event.shaped('16x tetra:forged_bolt', [
		'S',
		'H'
	], {
		S: 'kubejs:steel_sheet',
		H: 'kubejs:steel_nugget'
	})

	// Tetra Structure Beam
	event.shaped('4x tetra:forged_beam', [
		'  H',
		' H ',
		'H  '
	], {
		H: 'kubejs:steel_ingot'
	})

	// Tetra Quick Latch
	event.shaped('4x tetra:quick_latch', [
		' TA',
		' H ',
		'AT '
	], {
		T: 'minecraft:tripwire_hook',
		A: 'kubejs:steel_nugget',
		H: 'kubejs:steel_sheet'
	})

	// Tetra Insulated Plate
	event.shaped('4x tetra:vent_plate', [
		'HC',
		'CH'
	], {
		C: 'minecraft:copper_ingot',
		H: 'kubejs:hardened_ceramic'
	})


	// Craftable Wither Skeleton Skull
	event.shaped('minecraft:wither_skeleton_skull', [
		'SAS',
		'H H',
		'SAS'
	], {
		S: 'tetra:metal_scrap',
		A: '#forge:nuggets/gold',
		H: '#forge:dusts/glowstone'
	})

	// Craftable Broken Fabricator
	event.shaped('kubejs:broken_fabricator', [
		'HH',
		'AA'
	], {
		A: '#forge:nuggets/iron',
		H: 'create:iron_sheet'
	})
	// Ceramic Powder
	event.shapeless('3x kubejs:ceramic_powder', ['4x minecraft:clay_ball', '2x create:crushed_iron_ore'])

	// Leather from Niteya Hide
	event.shapeless('1x minecraft:leather', '2x kubejs:niteya_hide')

	// Leather from Gullhorn Hide
	event.shapeless('2x minecraft:leather', '1x kubejs:gullhorn_hide')

	// Purified Ceramic Powder via Heated Mixing
	event.recipes.createMixing('4x kubejs:purified_ceramic_powder', [
		'kubejs:ceramic_powder',
		Fluid.of('milk', 250),
	]).heated()

	// Beef Gullington
	event.recipes.createMixing('kubejs:beef_gullington', [
		'kubejs:speciality_gullhorn_cut',
		'create:dough',
	]).heated()

	//Carbide Sheet via Press
	event.recipes.createPressing('kubejs:carbide_sheet', [
		'kubejs:carbide_ingot'
	])

	//Uradyne Ingots from Smelting
	event.smelting('kubejs:uradyne_ingot', 'kubejs:raw_uradyne_ore')

	//Leather from Rotten Flesh
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh')

	//Name Tag
	event.shaped('minecraft:name_tag', [
		'S  ',
		' L ',
		'  L'
	], {
		S: 'minecraft:string',
		L: 'minecraft:leather'
	})
	//Saddle
	event.shaped('minecraft:saddle', [
		'LLL',
		'L L ',
		'I I'
	], {
		S: 'minecraft:iron_ingot',
		L: 'minecraft:leather'
	})


	// Steel Ingots
	event.recipes.createMixing('2x kubejs:steel_ingot', [
		'2x minecraft:iron_ingot',
		'minecraft:coal'
	]).heated()

	//Steel Sheet via Press
	event.recipes.createPressing('kubejs:steel_sheet', [
		'kubejs:steel_ingot'
	])

	//Steel Nuggets from Ingot
	event.shapeless('9x kubejs:steel_nugget', 'kubejs:steel_ingot')

	//Steel Ingot from Nuggets
	event.shapeless('kubejs:steel_ingot', '9x kubejs:steel_nugget')

	//Tin Sheet via Press
	event.recipes.createPressing('kubejs:tin_sheet', [
		'kubejs:tin_ingot'
	])

	//Tin Nuggets from Ingot
	event.shapeless('9x kubejs:tin_nugget', 'kubejs:tin_ingot')

	//Tin Ingot from Nuggets
	event.shapeless('kubejs:tin_ingot', '9x kubejs:tin_nugget')

	// Bronze Ingots
	event.recipes.createMixing('2x kubejs:bronze_ingot', [
		'#forge:ingots/copper',
		'#forge:ingots/tin'
	]).heated()




	// Carbide Ingots
	event.recipes.createMixing('3x kubejs:carbide_ingot', [
		'tetra:metal_scrap',
		'create:powdered_obsidian',
		'minecraft:diamond'
	]).superheated()

	// Typhonite Ingots
	event.recipes.createMixing('2x kubejs:typhonite_ingot', [
		'kubejs:uradyne_ingot',
		'kubejs:amalgamated_metal'
	]).superheated()

	//Typhonite Sheet via Press
	event.recipes.createPressing('kubejs:typhonite_sheet', [
		'kubejs:typhonite_ingot'
	])
	//Smelt Iron Sheet into Iron Ingot
	event.smelting('minecraft:iron_ingot', 'create:iron_sheet')

	//Smelt Purified Ceramic Powder into Hardened Ceramic
	event.smelting('kubejs:hardened_ceramic', 'kubejs:purified_ceramic_powder')

	//Stained Wood via Haunting
	event.recipes.createHaunting('kubejs:stained_wood', [
		'#minecraft:planks'
	])

	//Fabricator via Item Application
	event.recipes.createItemApplication('kubejs:fabricator_casing', [
		'kubejs:broken_fabricator', 'create:iron_sheet'
	])

	//Fabricator via Item Application
	event.recipes.createItemApplication('minecraft:crafting_table', [
		'kubejs:fabricator_casing', 'kubejs:advanced_battery'
	])
	//Craftable Fabricator
	event.shaped('minecraft:crafting_table', [
		'SHS',
		'H H',
		'SHS'
	], {
		S: 'create:iron_sheet',
		H: 'minecraft:iron_nugget'
	})
	//Packaged MRE to Heated MRE
	event.shapeless('kubejs:heated_mre', 'kubejs:packaged_mre')

	//Fluorite Ore Crushing
	event.recipes.createCrushing([
		'2x kubejs:fluorite',
		Item.of('3x create:experience_nugget').withChance(0.8),
		Item.of('2x kubejs:fluorite').withChance(0.3),
		Item.of('minecraft:cobblestone').withChance(0.12)
	], 'kubejs:fluorite_ore')

	//Ruby Ore Crushing
	event.recipes.createCrushing([
		'2x kubejs:ruby',
		Item.of('4x create:experience_nugget').withChance(0.8),
		Item.of('2x kubejs:ruby').withChance(0.2),
		Item.of('minecraft:cobblestone').withChance(0.12)
	], 'kubejs:ruby_ore')

	//Jade Ore Crushing
	event.recipes.createCrushing([
		'1x kubejs:jade',
		Item.of('4x create:experience_nugget').withChance(0.8),
		Item.of('2x kubejs:jade').withChance(0.4),
		Item.of('minecraft:cobblestone').withChance(0.12)
	], 'kubejs:jade_ore')

	//Jasper Ore Crushing
	event.recipes.createCrushing([
		'2x kubejs:jasper',
		Item.of('1x create:experience_nugget').withChance(0.8),
		Item.of('2x kubejs:jasper').withChance(0.4),
		Item.of('minecraft:cobblestone').withChance(0.12)
	], 'kubejs:jasper_ore')


	// Portal Frame Blocks for Void AKA End
	event.shaped('12x minecraft:end_portal_frame', [
		'CSC',
		'FAF',
		'CSC'
	], {
		S: 'minecraft:netherite_ingot',
		C: 'kubejs:carbide_sheet',
		A: 'minecraft:amethyst_shard',
		F: 'undergarden:regalium_crystal'
	})

	// Industrial Wall Smooth
	event.shaped('32x kubejs:industrial_wall_smooth', [
		'CCC',
		'CBC',
		'CCC'
	], {
		B: 'tetra:forged_beam',
		C: 'kubejs:carbide_sheet'
	})

	// Industrial Wall Bolted
	event.shaped('32x kubejs:industrial_wall_bolted', [
		'TCT',
		'CBC',
		'TCT'
	], {
		B: 'tetra:forged_beam',
		C: 'kubejs:carbide_sheet',
		T: 'tetra:forged_bolt'
	})

	// Industrial Mesh
	event.shaped('32x kubejs:industrial_mesh', [
		'TCT',
		'CTC',
		'TCT'
	], {
		C: 'tetra:forged_beam',
		T: 'tetra:forged_mesh'
	})

	//Minced Velocitrod Meat
	event.recipes.createCrushing([
		'1x kubejs:minced_velocitrod_meat',
		Item.of('1x kubejs:minced_velocitrod_meat').withChance(0.5)
	], 'minecraft:chicken')
	// Trod Tot
	event.shapeless('6x kubejs:trod_tot', ['1x kubejs:minced_velocitrod_meat', '1x minecraft:egg', '1x create:wheat_flour'])


	// Red Industrial Wall Smooth
	event.shapeless('1x kubejs:red_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:red_dye'])
	// Red Industrial Wall Bolted
	event.shapeless('1x kubejs:red_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:red_dye'])

	// Yellow Industrial Wall Smooth
	event.shapeless('1x kubejs:yellow_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:yellow_dye'])
	// Yellow Industrial Wall Bolted
	event.shapeless('1x kubejs:yellow_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:yellow_dye'])

	// Green Industrial Wall Smooth
	event.shapeless('1x kubejs:green_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:green_dye'])
	// Green Industrial Wall Bolted
	event.shapeless('1x kubejs:green_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:green_dye'])

	// Blue Industrial Wall Smooth
	event.shapeless('1x kubejs:blue_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:blue_dye'])
	// Blue Industrial Wall Bolted
	event.shapeless('1x kubejs:blue_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:blue_dye'])

	// Cyan Industrial Wall Smooth
	event.shapeless('1x kubejs:cyan_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:cyan_dye'])
	// Cyan Industrial Wall Bolted
	event.shapeless('1x kubejs:cyan_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:cyan_dye'])

	// Purple Industrial Wall Smooth
	event.shapeless('1x kubejs:purple_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:purple_dye'])
	// Purple Industrial Wall Bolted
	event.shapeless('1x kubejs:purple_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:purple_dye'])

	// Magenta Industrial Wall Smooth
	event.shapeless('1x kubejs:magenta_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:magenta_dye'])
	// Magenta Industrial Wall Bolted
	event.shapeless('1x kubejs:magenta_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:magenta_dye'])

	// Lime Industrial Wall Smooth
	event.shapeless('1x kubejs:lime_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:lime_dye'])
	// Lime Industrial Wall Bolted
	event.shapeless('1x kubejs:lime_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:lime_dye'])

	// Brown Industrial Wall Smooth
	event.shapeless('1x kubejs:brown_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:brown_dye'])
	// Brown Industrial Wall Bolted
	event.shapeless('1x kubejs:brown_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:brown_dye'])

	// Black Industrial Wall Smooth
	event.shapeless('1x kubejs:black_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:black_dye'])
	// Black Industrial Wall Bolted
	event.shapeless('1x kubejs:black_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:black_dye'])

	// Light Gray Industrial Wall Smooth
	event.shapeless('1x kubejs:light_gray_industrial_wall_smooth', ['1x kubejs:industrial_wall_smooth', '1x minecraft:light_gray_dye'])
	// Light Gray Industrial Wall Bolted
	event.shapeless('1x kubejs:light_gray_industrial_wall_bolted', ['1x kubejs:industrial_wall_bolted', '1x minecraft:light_gray_dye'])
	// Light Gray Industrial Mesh
	event.shapeless('1x kubejs:light_gray_industrial_mesh', ['1x kubejs:industrial_mesh', '1x minecraft:light_gray_dye'])

	//Armors

	//Quick Armor Recipe Setup
	let armorSets = [
		//[tier, material],
		['gullhorn', 'kubejs:gullhorn_hide'],
		['typhonite', 'kubejs:typhonite_ingot']
	]

	armorSets.forEach(set => {
		let tier = set[0]
		let material = set[1]
		event.shaped("kubejs:" + tier + "_helmet", ["III", "I I"], { I: material }).id('gullhorn:' + tier + '_helmet');
		event.shaped("kubejs:" + tier + "_chestplate", ["I I", "III", "III"], { I: material }).id('gullhorn:' + tier + '_chestplate');
		event.shaped("kubejs:" + tier + "_leggings", ["III", "I I", "I I"], { I: material }).id('gullhorn:' + tier + '_leggings');
		event.shaped("kubejs:" + tier + "_boots", ["I I", "I I"], { I: material }).id('gullhorn:' + tier + '_boots');

		event.shaped("kubejs:" + tier + "_helmet", ["III", "I I"], { I: material }).id('typhonite:' + tier + '_helmet');
		event.shaped("kubejs:" + tier + "_chestplate", ["I I", "III", "III"], { I: material }).id('typhonite:' + tier + '_chestplate');
		event.shaped("kubejs:" + tier + "_leggings", ["III", "I I", "I I"], { I: material }).id('typhonite:' + tier + '_leggings');
		event.shaped("kubejs:" + tier + "_boots", ["I I", "I I"], { I: material }).id('typhonite:' + tier + '_boots');
	});

	//Detailed Armor Recipes

	//Steel Armor via Smithing Table
	event.smithing('kubejs:steel_helmet', 'minecraft:iron_helmet', 'kubejs:steel_ingot')
	event.smithing('kubejs:steel_chestplate', 'minecraft:iron_chestplate', 'kubejs:steel_ingot')
	event.smithing('kubejs:steel_leggings', 'minecraft:iron_leggings', 'kubejs:steel_ingot')
	event.smithing('kubejs:steel_boots', 'minecraft:iron_boots', 'kubejs:steel_ingot')

	//Carbide Armor via Smithing Table
	event.smithing('kubejs:carbide_helmet', 'minecraft:diamond_helmet', 'kubejs:carbide_ingot')
	event.smithing('kubejs:carbide_chestplate', 'minecraft:diamond_chestplate', 'kubejs:carbide_ingot')
	event.smithing('kubejs:carbide_leggings', 'minecraft:diamond_leggings', 'kubejs:carbide_ingot')
	event.smithing('kubejs:carbide_boots', 'minecraft:diamond_boots', 'kubejs:carbide_ingot')

})

//onEvent('item.tags', event => {
// Get the #forge:cobblestone tag collection and add Diamond Ore to it
// event.get('forge:cobblestone').add('minecraft:diamond_ore')

// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
//})