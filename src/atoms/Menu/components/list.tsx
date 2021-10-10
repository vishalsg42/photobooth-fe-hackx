import cn from 'classnames';
import MenuListItem from './item';

const MenuList = ({ className = null, title = null, ...props }) => (
  <>
    {title && <p className='menu-label'>{title}</p>}
    <ul className={cn('menu-list', className)} {...props} />
  </>
);

MenuList.Item = MenuListItem;

export default MenuList;
