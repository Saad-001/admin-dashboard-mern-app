import { GridColumnMenuContainer, GridFilterPanel } from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentcolumn={currentColumn}
      colDef={{}}
      open={open}
    >
      <GridFilterPanel />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
