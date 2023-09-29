//Задача № 1
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId === null) {
      wrapper.count++;
      func(...args);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }

  return wrapper;
}

//Задача № 2
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      return "Из кеша: " + objectInCache.value;
    }
    let result = func(...args);
    cache.push({
      hash,
      value: result,
    });
    if (cache.length > 5) {
      cache.shift();
    }
    return "Вычисляем: " + result;
  }
  return wrapper;
}
