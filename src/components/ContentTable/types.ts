export interface ContentTableItem {
	id: string;
	label: string;
}

export interface ContentTableProps {
	items: ContentTableItem[];
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}
