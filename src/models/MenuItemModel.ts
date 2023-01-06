interface MenuItemModel {
  icon: JSX.Element;
  subMenuTitle: string;
  navigateTo: () => void;
}

export default MenuItemModel;
