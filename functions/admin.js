export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // 检查路径是否是 /admin（忽略大小写）
  if (url.pathname.toLowerCase() === '/admin') {
    // 如果不是小写 /admin，则改写为小写并重新处理
    if (url.pathname !== '/admin') {
      url.pathname = '/admin';
      return fetch(url.toString());
    }
  }
  
  // 其他情况交给默认处理
  return context.next();
}
