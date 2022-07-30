import {
  ContainerMenu,
  Logo,
  ListMenuItem,
  MenuItem,
  LoginButton,
} from './styles';

const menuItems = [
  {
    display: `Início`,
    page: `/`,
    name: `home`,
  },
  {
    display: `Sobre mim`,
    page: `/about`,
    name: `about`,
  },
  {
    display: `Projetos`,
    page: `/projects`,
    name: `projects`,
  },
];

const Menu: React.FC<{
  myLocation?: string;
}> = ({ myLocation = `` }) => {
  return (
    <ContainerMenu>
      <Logo>SMCODES</Logo>
      <ListMenuItem>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            {...(myLocation === item.name && {
              className: `selected`,
            })}
          >
            {item.display}
          </MenuItem>
        ))}
      </ListMenuItem>
      <LoginButton>Entrar</LoginButton>
    </ContainerMenu>
  );
};

export default Menu;
