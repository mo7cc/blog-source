import { onMounted } from 'vue';

declare const BLOG_VERSION: string;

const info = `   
███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗╚════██║
██╔████╔██║██║   ██║    ██╔╝
██║╚██╔╝██║██║   ██║   ██╔╝ 
██║ ╚═╝ ██║╚██████╔╝   ██║    
╚═╝     ╚═╝ ╚═════╝    ╚═╝
`;

export const setupConsole = () => {
  onMounted(() => {
    console.info(info);
    console.info(BLOG_VERSION);
  });
};
