export const getCookie = (name: any, cookie: any) => {
  const value: any = `; ${cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};
