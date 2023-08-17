import { FC } from 'react';
import {cva} from 'class-variance-authority'

interface paragraphProps {
}

const paragraphVariants= cva("max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center"),
{
    variants:{
       size:{
               default:'text-base sm:text-lg',
               sm: 'text-sm, sm:text-base',
       }
    },
    de
}
const paragraph: FC<paragraphProps> = ({}) => {
  return <div >paragraph</div>
}

export default paragraph