import { toast } from 'react-toastify';

// to make notificatio to any component
const notify = (msg, type) => {
    if (type === 'warn') {
      toast.warn(msg);
    } else if (type === 'success') {
      toast.success(msg);
    } else if (type === 'error') {
      toast.error(msg);
    }
    
  }


  export default notify