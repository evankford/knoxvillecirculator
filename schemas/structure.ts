
import {FiSettings, FiInfo} from "react-icons/fi"
import {IoShareSocialOutline} from "react-icons/io5"
import { IconType } from "react-icons/lib";
import {BiUser} from "react-icons/bi"
import {BsCalendarEvent} from "react-icons/bs";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { ListItem, ListItemBuilder, StructureBuilder , ConfigContext} from "sanity/desk";
const definedSettings: [string, string, IconType][] =
[ ['aboutSettings', 'About Circulator', FiSettings],  ['eventSettings', 'About Events', FiInfo] , ['socialSettings', 'Social Settings', IoShareSocialOutline]];
const orderables: [string, string, IconType][] =
[ ['person', 'People', BiUser],  ['event', 'Events', BsCalendarEvent] ];



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


function createOrderables(S:StructureBuilder, C:ConfigContext){
	let os:ListItem[] =[]
	if (orderables.length > 0) {
		os.push(S.divider())
	}
	orderables.forEach(o=> {
		os.push(
			orderableDocumentListDeskItem({
				type: o[0],
				context: C,
				S,
				icon: o[2],
				title: o[1]
			}),
		)
	})
	return os;
}

export default (S:StructureBuilder, C:ConfigContext) =>
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
					) && (
					!orderables.map(p=>p[0]).includes(id)
				)
			}
		),
		...createOrderables(S, C),
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
