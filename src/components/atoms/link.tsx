import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface CustomLinkProps {
  children?: ReactNode;
  text?: string;
  route: string;
  styles?: { [key: string]: any };
}
const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  text,
  route,
  styles,
}) => (
  <Link
    to={route}
    style={{ color: 'inherit', textDecoration: 'none', ...styles }}
  >
    {text || children}
  </Link>
);
export default CustomLink;
