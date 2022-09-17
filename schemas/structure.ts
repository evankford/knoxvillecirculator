
import {FiSettings, FiInfo} from "react-icons/fi"
import {IoShareSocialOutline} from "react-icons/io5"
import { IconType } from "react-icons/lib";

import type { ListItem, ListItemBuilder, StructureBuilder } from "sanity/desk";
// const definedSections: [string, string][] =
// [['intro', 'Intro']];
const definedSettings: [string, string, IconType][] =
[ ['aboutSettings', 'About Circulator', FiSettings],  ['eventSettings', 'About Events', FiInfo] , ['socialSettings', 'Social Settings', IoShareSocialOutline]];



function createSections(S:StructureBuilder, A: [string, string, IconType][]) {
		let list:Array<ListItem | ListItemBuilder> = A.map(section=>
		S.listItem()
		.title(section[1])
		.icon(section[2])
		.child(
			S.document({title: section[1], id: section[0]})
			.schemaType(section[0])
      .title(section[1])
			.documentId(section[0])
		)
	)
	return list;
}


export default (S:StructureBuilder) =>
	S.list()
	.title('Base')
	.items([
		...S.documentTypeListItems().filter(
			(listItem) => {
				const schemaType =  listItem.getSchemaType();
				const type =  ( typeof schemaType == "object" && 'name' in schemaType) ? schemaType.name : schemaType ? schemaType  : false;
				const id =listItem.getId();
				if (!id || !type) {
					return false;
				}
				return  (
					!definedSettings.map(p=>p[0]).includes(id)
					)
				// 	!definedSections.map(p=>p[0]).includes(id)
				// )
			}
		),
		// S.listItem()
		// .title('Home Page')
		// .child(
		// 	S.list()
		// 	.title('Home Page Sections')
		// 	.items(
		// 		createSections(S, definedSections)
		// 	)
		// ),

		S.divider(),
		S.listItem()
		.icon(FiSettings)
		.title('Settings')
		.child(
			S.list()
			.title('Settings')
			.items(
				createSections(S, definedSettings)
			)
		)
	]);
