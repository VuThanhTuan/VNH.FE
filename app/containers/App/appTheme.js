import { createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#009c52', // green
    },
    secondary: {
      main: '#37474f', // header
    },
    background: {
      head: '#f4f5f7',
      default: '#e6eff8',
    },
    action: {
      disabled: '#78909c',
      selected: '#d3dfe9',
      activated: '#cfd3d5',
    },
    text: {
      primary: '#263238', // normal
      secondary: '#455a64', // title, text menu, text header
      disabled: '#648191',
    },
    common: {
      light: '#ee9801', // orange
    },
    notify: {
      info: '#43a5ee',
    },
    color1: '#01a8ee', // Xanh nước biển
    color2: '#f57761', // Cam đỏ
    color3: '#de1129', // Đỏ
    color4: '#ff017e', // Hồng
    color5: '#01a8ee', // Hồng tím
    color6: '#6871c1', // Tím xanh
    color7: '#7551e8', // Tím
    color8: '#1458e9', // Xanh dương đậm
    transparency: 0.15, // Độ trong suốt, mặc định 15%
  },
});

export default appTheme;
