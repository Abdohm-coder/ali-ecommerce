import { ActionIcon, Paper } from "@mantine/core";
import { useEffect } from "react";
import {
  TbBuildingStore,
  TbDashboard,
  TbFileDescription,
  TbLogout,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

function DashSidebar({ logOut }) {
  return (
    <Paper shadow="lg" radius="none" p="sm" className="sm:w-20 w-16 bg-dark">
      <aside className="flex flex-col h-full w-full justify-center items-center">
        <div className=" w-full mt-4 grid items-center">
          <Link to={ROUTES.HOME}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAABoCAYAAAAQEe8+AAAACXBIWXMAAAsSAAALEgHS3X78AAASi0lEQVR4nO2d+3UayRLGR3v8P9wIYCMQNwJwBNZGIByBcATCERhHYBSBtREYRWApAkMEV0TAPbNbvYsxw7zqq359v3M4+/Ly6Jnp/vqr6qqrw+FQeGRSFMWwKIqZfIWxvEg/Zhw/QgghpDlvjMeqFEA3smBPeZ0IIYQQEgIWgqgUQQsRQgNedUIIIYSEBlIQzUUIXfOqE0IIISRkEIKoFELLoihGvPKEEEIIiQFNQVTmBa3oCBFCCCEkNn5T+L5DEULfKIYIIYQQEiN9HaIyYfqR4TFCCCGExEwfh6jMFfpOMUQIIYSQ2OnqEK2Lorjl1SeEEEJICnRxiCiGCCGEEJIUbQURxRAhhBBCkqONIKIYIoQQQkiSNBVES4ohQgghhKRKk2735WmyL7wDouIq9wEghBBC2lAniMZFUTyzKWt0UBARQgghLagLmT1SDBFCCCEkdS4JoiVbcRBCCCEkB6oEURkqW/AOIDXMOEDRMpTWO4QQYsFE5p1gqcoh4hH7uLHKIdoURfEqifevqQ5moixF0FLUkmOcUJ7Jxti9mrRoepF5oMw73cpfNxxdImzktQx1QM4Jopl0rifxYimIpkVR7IqiuJEJkITPUBasMj/wLRet7JnIpmYGSpN4knzUR7nvSH44XbEXgR3kBvqcICpv2nd+vg5RwloQFXKjL8RdDBXEwh+jw7IqiuJO/v4pst8wlxea7dHivTlyPlLBpUXcGDfofpE5Yg1aFNfy2xC8ynhZsgQ9n1uj58hxvFZ8DNUlOhVE5Y30w9/XIUr4EESOB5loQ9wB1Bbd6kBsJQ7OPeMxuUTlRHrv8fNfjkJBmwgdj5mM4elz64MH+S6aY4ium/fecNOHXI8tf8dp1ClYl+g0qZqJ1KQvt7JQMGE3TM7tzIKN6QfItdzjX2Sx2orjFvr9PpHn8lsgYqiQcfwhC7NWsu1aQvgoLNdIlIOzM3byTz9rEKrWOBVElhYaSZdrmXx5P4XFuOKwxJTJ1Z0ZSfjxe6D3/FAE2/eAhNAptyIstRZJpMC/NnxWUKJhBXrfc8wrQrILYGizM8eC6IZFGIkiA9lFWz585DKXFgq6RP2Zyj2/DURg3sh3uWvwZ31TzhefJBzZd6FEu0QWoncOWo/3xu5Q1bwyCHHOORVEhGhzpzTJkX7Makpp0CXSYyShqUePdVfKjcjXCDe51zJf9BUdyEX/1mA+Q7pDVrk7Ve6Qw2IcW0FBRCxwkxzvMX802Y3RzdPlndz3lvlFQ/nMGFyhKjTc5ZW4ISiQLhGq/MHe+BlvMucE5RI5QTRhuIyAGciOlYuuPbOG+SPXzPtSZ2SYWzQRMZRKy6W7HgnXr+C5ZgF0/1D3iqU7tGxYziEol8gJIlrlxIo7WSCCLuGeGG12Ycwl0sc5HkhR5E6RWdYUsuC2x3yBdIkGIMe76uBDXyzdoWHLkF8wc86xQ0SIFdOAEk9Tp6k75BjRJYKBEkVODKXq8l93FEVolwixkKfgDi1a3ovBuEROEDHhlVgzkMRTOhJYuiwIvCY4tGsWpS6GHNeSpN4WpEs0AmzqEMnUIbtDjiDmHCeIQq1PQdLnniE0GPOO+SR0iXAMFE+fDTMRQ45ph9NjMblEqKP2IbtDjiBcotPCjIT4YOrhNE4O9Jms6RLhGCmMb25iyHHbwYFAukRTxYU8dndo3LOtjvc+mL8xj4MEwkiq6bJ9jA51NUDqoEuE5a7nQrpK6DRZWz61XLdicIlQR+0fjU+W9cF7LTQ6RCQ0PnkuaJcKGpM0XSIsXcd3DjqJFBNt5wik+3CjMF+hNh9Wz7DW6Tivcw4FEQkRHwXtUqJpDZA6NEI7pJoueRNj1vL6i0FLkbOV7vqo79JH0KCO2j/I77ZAa57w6hJREJFQsSxolxJdT3lUgSxAR9rf3ysW0f2Hdy0XT6S47/PMxe4OTZQFnbdNGAURCRlX0K5rtdoc6XrKo4oB87qgtCnuNxMR4IOXoig+F0XxsSiKt/L6Q/75AdxM9RKhuER9cu4Qz5elO6TtWHpzia4Oh8NM6sGQdLgy+iUbw5INLzLhPPd4j4Pi93FYjXUThjIJajsIe7H1rZIzL7HseZLlHA9nFtahiJUbA0fm94aLl3Vbjp0sduuG134sizvq+HgV71sIo/I7/gB9j6cOC/lcNn3aNL2n+oLSD13Gsjd0iEgsXDOEVou2O+RI3SXayr11/HqUe20szgiSJrlyXWtKdWEvzs+4ZQ2brdwnY6ATc442IRakSzTtkPcYuzuECm95cYkoiEhMaHTBTpUxWLTkmkv0Kr/9A/AzmgoiC15kIeqz0L3K9/0D3HHe0TZcFUouEeqovVUOTtu2QG0xzyWiICIxcifhA7ac+ZclOEyRey7RSmx8BHU74YlRaNqJoT5h6WMe5f0sRFGbexPpErU5OYgQuSm4Q46pdUSAgojEyrVM3IiO07GBOrZ7Su4nznxV0rUQok4MaeeJPRuJouuW4SrkYt5kEUc9s1bu+dxIpJu6RBREJGZK1+IrQ2hmk0buLlGX5qJNqBOZaNG/B4khx7PRTr/NZyBdoibPCGI8nhTdvTqs5hzTivkURCQF7jJuEGvlDjnuMw5VogTDpTwSi1NuNwYnCB8NktPbCkeU41dXqFG7VpjDSqT0bQvUFjOXiIKIpMJUdn259ebzEcZh9Wo70O7QZ9lMWLAA1ysatQybbYB5YZcED0LkPhleR+vn38wloiAiKTGQmhi5LNjoUx5VdGk5Qaq5lF+DFPh7D88KemFrO16o33994bsgPtPqOi6M3SGHye+jICIpcp9JCM2n8MvRJUKJwKq8jyF48Vl6KLa5kQRuFG0FkbVLNANcUyt3aOjxuTdxiSiISKpME28Q68sdcuToElmHY5H37t7jqTnkIYguY4Za5N+deUZizh1CFX5tCvx3UhCRlCl3Fd8TPRkVgkOTm0uE2qFWOURIAfbosRXLGngMv4v7YuUSjQG96CzdId/z6Aj9HSiISA58Ah6Z9oFVDZA6cnKJkGNeVUgPOba+nwfkIt5FSKLE/fwodE93qD9LZCoEBRHJBV9dwhGE5Mzk4BLdgMM8VeKAgqgbXRZMlEs0OBJF2g5jTu6QA1oLjYKIkLiwrgFSx23CeVpjCe98Be6O9zVJ1QiQSc1NQRYQ7Ho/osT9AnTU3ioHbBWIO+SAVcx/g3hTQgiMEB2ZVeT1n06bmY5Bp4HOccmpQXW3t+p1dQmrmjltv9MLYNxH0pRak52RILIu/NoE5xKpz4UURITEg6Y7tFN8r6kIiBAXuSZMPeZk+Wg7Y9XeoY49yHno4x6sAOIFgdXGSPNzNK/3Qq6V6sEAhswIiYOh4uK5B8ThWb26PZa9p0IE9dv7hHDX4GraGsToDj0pzxGQXCIKIkLiQPOUx0pCNZq5JNMM26b0hSIyTEK/LlbfT9O9XAHKLajnElEQERI+2qc83O5SO1zDBb45lr2nSDtCdoms3KGZ4snc3VHdK83TjeouEQURIeGj6Q49HCXVau/Y6BI1Y2/VrJJ0JlRxH2Pu0LLi7zVYaJanoCAiJGy03aFTV4gukT3zQE56+QZVZ0kj0TZEl8jSHdI6ZLA/cYXK+/5PpfcuZKOoNudQEBESNpo1QM4l8WoLIrpEl/nQImyAam8RSt0oVFkDrWTt0MR9jO7Q+oxA1Z5z1CrmUxAREi7aNUDOTUSvEkbTxMdR8hh4aDk2qFNYIbRbiaHlS0gukZU7dKNcguLc/b4BjKuKiKMgIqGB2hXHiOZObXfBmdAWMNfMkfmFDwGNCargYxuQLpVmbZpQXCLLqtRaPFwIDWuPq4pLREFEQmOuHGOOFQt3yPEM6OPEXKK/KQX++44LDbJG0Q3wvZuADKtqjhuyM39T9kauq3ZboEsi7hEwrr3nHAoiEhqvMll/zPzKaFeIrdthau9AR3SJ/qrzNOsxtsjEa995XkhBpj1uvkPA6hWZK9Ccc+rKSrwC5pzeLhEFEQmV8uH8I9MQ2kzZHTqX2HjuzwQZ14+QvQj6SU+3AukQ+RSrE3CfOIQg8jUPpegOORC/q9ecQ0FEQuZRJs8QunNboi0kmk48dIn68yC7VI1riBREA4/XRr3lwhHaod9CNhO+XCILd2gIyFdsMpdsAQc6erlEFEQkdLbimGg/OKGiWQOkqElsPAWxE87BJdqJI/QfERlaC9greDPg49qgu6ejqn/7cIms3KGFB3eoy5+FvycFEYmBV1loPmRwtbQXqTaTg3Zp/SJhl6gUQZ+Lonh75AghdvLI9h4+rg16gUeNlw+XyMod0nTs2oq4DUD0d66FdnU4HMr/8ZvyFyJ+uTL69I2ym1HIAnNpUpvIf9cqVtgXzbFO9VncKdadKYXHvdJ7NeVFFqaNhLGeDStNl8nHX4Hvv5drY5G0i76/99rNPk8YynW3mHusrouP58mCpy6i6E2UP5XkzLNMFJtA6qloYlVrxJqRTLyhhs8ezoz9NpD2Gu54MmoRHshnoE+dDQHu4ynoZrnOJbIQEDG6QyHhXKJW9wRDZiRGXsUp+pzQ1dM+5REaC/DuvQ9bmTiPXyH1GkMLiSk4HDQ0cnXR41QY5hJZhOeWATntCFpvwCiISMwspOhdCkfzU08+HiS8G0Vj4RzeAfOJVgZubpNaWxpY5BI9GLhDY7nmKdM6l4iCiMTOWm760DpTtyF1d8gRsksUMojeT+f4oiwqnDOEPFXmsAw3oz/LYnOUS42wVr+TgoikwLOE0GJs+aFdAyRk6BJ1x+oeuRUR0zcJfibPpfahiyosT4Ah6uc42pTJ6Aq69EFItHKJKIhIKsTa8kO7Bkjo0CXqhmXn9XIR+SEirK0wGst3/WZ4X1uIiFNQApXukD6Nfy8FEUmNmFp+pHzKowq6RN2xXsjuRRg9yjU7t9Meyr9fiiP0w4P74GOBR7hEFsJukpE75Jg2zY+jICIpEkvLj0XipzyqoEvUDUuX6Jh3RVF8EtfncPL6n/z7e09lMD56PBGoLcQshJ3vRrW+aDS2FEQkVUJv+ZGjO+QYZNz4tS+59Ya7xM7zAq/pElm4Q9ptgWKiUVV2CiKSMiG3/MjVHXLcKVavzolNYvW3+qDZN64rWsKeuUN4an8/BRHJgXIX+d+A8orGiZbLb0vuE3RXlpGXmdDgs0Fl6iZouER0h2yodYkoiEguuJYfIeQVUQj8zS1dok64E5W58hJYuLnv82wR9ss1d+iUi9eKgojkRAgtP3KqAdIEisNuPEuV9tzYBygGtz1qoD3JtUQyT7DvY1cuukQURCRHfLb8oAD4GbpE3Vlnlk+0l9BPSH3mHF0dGOYO2VM5HhREJFd8tPzIsQZIEzhhd2cR8ElKbW4M3JSubMTtacOTQR5ULm2B2jCqCrm+CfYrE4LHtfxYS60VNKg4/mej0zYT0DjdiigKcecfAy4EkLLYfh9IEvUlllKTqc2ft/hO2uwNc5JQyeBLmfd/mjcpiEjuuATVJfjkF+rBfjJMMB2KaEGUC1iyxk4vUhVF+6O+aKHjXKImz7mFO7QEuUNrQ1d31lJkNsVVzP/pdzBkRsjfoFt+oCYQyy7fr1IFHMFtmyaM5Cyh1tzqSkxiyNH0OUcLCmThV8sTaxvgyeBfKuZTEBHyL6iWHyh3aGcsiArwRM5cov6sIurld4knSbaPSQwVDXOJLNwhVOHXPz2EtlEC7Je+ihREhPwMouVHCu6QY9shebQpU7pEKsTSy6+Kj3If+K5C3ZW6553uUDvWQIH/k0tEQUTIr2i2/JgDK8T6KraGFGJ0iXTYiij6GJFb9CIV5WO/By65RDG7QzuPie2oOecnl4iCiJBqNFp+oCb3B487aGTXdbpEuixFGHUtHGjBXjYfkwhDZFVUPfdoV3ecmDtk8dn/uEQURIRcpk/LD2QNEB/hMqvPp0uky1ZOUr4Fhju7sBcHa5xga4nNmU2DRc7fEuQO7T3POX2qgdfxj0tEQURIPV1bfqAW9pcAarIgFzC6RBg2Mq6/i8PoK5S2k7pCY3lGYs0VquP0+UcLfWRboMcArhPaJRpfHQ4H1Dl/4o8ro0+enB5bVOA58AlyLg+m24VVjfVQxgfBNpAihojr76j6jWNAq49QxtOaoThHNyKUEM6CYyeL6jqhsFgTtuIS7wxa1CDnnFDmZeRG6ZmCKE2sBFGuTGRyH3GsSULM5DWRV59w75OIgY28cq1CXm6gvogj5jvMTWqgIEoTLtJ4hjLBhdZ5mxBNnAtY5z64EG6ubtslNgwBxwEFUZpQEBFCCCEtYFI1IYQQQrKHgogQQggh2UNBRAghhJDsoSAihBBCSPa8kdoCIVUvJYQQQgixoyiK/wPzo/7FdYU80QAAAABJRU5ErkJggg=="
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-1 w-full flex-col items-center justify-center gap-4 mb-36">
          <Link to={ROUTES.DASHBOARD}>
            <ActionIcon size="xl" className="hover:bg-white/20">
              <TbDashboard color="white" size={32} />
            </ActionIcon>
          </Link>
          <Link to={ROUTES.PAGE_INFO}>
            <ActionIcon size="xl" className="hover:bg-white/20">
              <TbFileDescription color="white" size={32} />
            </ActionIcon>
          </Link>
        </div>
        <div className="grid items-center w-full h-24 justify-center">
          <Link to={ROUTES.HOME}>
            <ActionIcon
              onClick={logOut}
              size="lg"
              className="hover:bg-white/20">
              <TbBuildingStore color="white" size={24} />
            </ActionIcon>
          </Link>
          <ActionIcon onClick={logOut} size="lg" className="hover:bg-white/20">
            <TbLogout color="white" size={24} />
          </ActionIcon>
        </div>
      </aside>
    </Paper>
  );
}

export default DashSidebar;
