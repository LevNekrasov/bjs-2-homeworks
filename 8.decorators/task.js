//Задача № 1
function cachingDecoratorNew(func) {
    const cache = [];
    function wrapper(...args){
        const hash = args.join(',');
        const objectInCache = cache.find((item) => {
        if(item === hash){
            return true;
        }
        })
        if(objectInCache){
            console.log("Из кэша: " + func(...args));
            return "Из кэша: " + func(...args);
        }
        cache.push(hash);
        if(cache.length > 5){
            cache.splice(0, 1)
        }
        console.log("Вычисляем: " + func(...args))
        return "Вычисляем: " + func(...args);
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        wrapper.allCount++;
        if(timeoutId === null) {
        func(...args);
        wrapper.count++;
        }
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
        wrapper.count++;
        func(...args);
        }, delay);
    }
    return wrapper;
}

