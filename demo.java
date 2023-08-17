/**
 * menus ：根据当前用户的权限id查询出来的菜单列表
 */
public List<MenuTree> loopMenuTree(List<MenuTree> menus){

  for(MenuTree parent : menus){
      List<MenuTree> child = queryChildren(parent.getComman());
      parent.setChildren(child);
  }

}

public List<MenuTree> queryChildren(int comman){
  //根据comman查询子菜单，查询数据库
  List<MenuTree> children = .....
  if(children==null || children.size() == 0){
    return null;
  }
  for(MenuTree child : children){
    List<MenuTree> children = queryChildren(child.getComman());
    child.setChildren(children);
  }
  return children;
}