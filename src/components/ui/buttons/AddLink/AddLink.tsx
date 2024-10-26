import { Button } from '@/components/index';
import { FC } from 'react';

interface AddLinkProps {
  className?: string;
}

export const AddLink: FC<AddLinkProps> = ({ className }) => {
  return (
    <Button type="button" className={className}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1282 1.75736C17.8138 -0.557042 14.0715 -0.589561 11.7173 1.68427L9.98695 3.4044L9.90348 3.49836C9.59731 3.88976 9.62339 4.45707 9.98282 4.8186C10.3722 5.21026 11.0054 5.21211 11.397 4.82273L13.117 3.11273L13.2816 2.96241C14.8471 1.61026 17.2242 1.68184 18.714 3.17157C20.2569 4.71451 20.2786 7.20933 18.7627 8.77885L15.7749 11.7665L15.6066 11.9253C14.8026 12.6417 13.7405 13.0058 12.6601 12.9284C11.5025 12.8455 10.4379 12.2639 9.74275 11.3346C9.41195 10.8923 8.78526 10.802 8.34301 11.1328C7.90076 11.4636 7.81042 12.0903 8.14122 12.5325C9.18397 13.9266 10.7808 14.799 12.5172 14.9233C14.2536 15.0477 15.9585 14.4117 17.1892 13.1805L20.1891 10.1807L20.3648 9.99102C22.4718 7.61803 22.3817 4.01086 20.1282 1.75736ZM13.7428 9.33458C12.7 7.94055 11.1032 7.06814 9.36677 6.94378L9.09293 6.93044C7.4522 6.88801 5.86074 7.52017 4.69475 8.68658L1.69488 11.6865L1.51922 11.8761C-0.587842 14.2491 -0.497709 17.8563 1.75579 20.1098C4.07019 22.4242 7.81243 22.4567 10.1667 20.1828L11.8891 18.4607L11.9723 18.3665C12.2773 17.9742 12.2496 17.4069 11.8891 17.0465C11.4986 16.6559 10.8654 16.6559 10.4749 17.0465L8.76488 18.7565L8.60053 18.9066C7.03683 20.2569 4.65973 20.1853 3.17 18.6955C1.62707 17.1526 1.60539 14.6578 3.12128 13.0883L6.10909 10.1007L6.27735 9.94181C7.08136 9.22546 8.14346 8.86129 9.2239 8.93867C10.3815 9.02158 11.4461 9.60318 12.1412 10.5325C12.472 10.9748 13.0987 11.0651 13.541 10.7343C13.9832 10.4035 14.0736 9.77683 13.7428 9.33458Z"
          fill="#15C0E6"
        />
      </svg>
    </Button>
  );
};
