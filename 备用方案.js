/**
 * 备用方案 - 在图片无法加载时使用内嵌Base64图片代替
 * 
 * 说明：
 * 1. 如果您暂时无法上传所有游戏图片，可以使用此脚本暂时替代
 * 2. 将此文件重命名为script.js替换原有文件，或将内容复制到原script.js文件中
 * 3. 这些Base64编码的图片仅作为临时解决方案，质量较低
 * 4. 建议在条件允许时，按照图片文件夹说明上传真实图片
 */

// 默认游戏图片 (Base64编码的游戏控制器图片)
const defaultGameImage = 'data:image/png;base64,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';

// 默认网站图标 (Base64编码的游戏控制器图标)
const defaultFavicon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO2WbUyTVxTHn/u0T19sS1+BlkJbSsuLFOQlgIqIQ4UoIGVuItkUZWZ+2BajJIuJmsUPflk2tyxbsi9mZkz2ZdE4nVOc2wSdjoFAR6mjoFQolEJ5KaXQlrZ9nv1RL2xcmRbww5L9k5Pm3HPP+Z977rn3HoSHeJAQzcRJfZA2zITXp+WJxWKaYZg7Ho/nIwC4+p8SgM6qzcmT0TQd19PT44+KigJCCCQSCfh8vutut/s4gP86IaCqqqra6urqBEIIfN8ghMCyZcvYK1euOGtra6OXnIBer39HKBQ2WyyWiJCrYrEYvF5v6OGpioqKn5aUgMlkyuN5/oTFYln0FeTk5EBLS8s9Qogrl8v5JSEQCAQSWJbtNZvNC05ss9kAAGBgYAD8fj9s3boVJBIJ2Gw2GB8fD/E1NTWfLgkBhmH22+32RRPQNHDsT0AIQWpqKuzbtw8UCgWUlpYCQghaW1sBYzxnQmISeBrVR0ajsTYzM3NBcpFIBJmZmZCdnQ2RSAS7d++GnJwcSExMhPj4eNi4cSMUFRWBVCpFCCHIzs4GlmW7RkZGtADgXzQBvV5fHBcXd667u3tB8vLycli/fj0UFhaCVCq9z9fU1AStra3Q0dEBPM/PeBiGAYZhfisuLn51UQRMJlMeTdNXnU5nxMrVajXU1NRAcXHxnDGDg4NgMBj+IdDV1QUulwsqKyvB7XZ3DAwMFALAvXsm7L0W7OWvCIp9Pp+Y53mEMUaEEBQMBtHIyAgaGxtDw8PDyOfzoWAwGGLiOA6xLIu8Xi/iOA4RQhDHcYhhGDQ2Noa8Xi8KBAIIYzxNCGEIIX6KogY0Gk2/RqMZ3bBhg2exHrglEolOejyeapfLFREKheDy5cuwZs0ayMjIAJlMBgzDwMTEBNjtdrh+/TpcvHgR2tvbQSgUQlJSEqSmpoLP54ORkRE4e/bsbyzLvgcAEwAAtbW1Qpqmz1y7di0n5MLhkJycDLt27YKqqipQq9UhlYdDCIHh4WFobm6G48ePw8WLF0OPpqWlwerVq0Gn002sXLly+5kzZ2w0AIBarf4gIyOjrr+/P2ICMpkMDh48CG+88QbIZLJFBdnt27fh888/hyNHjkBXVxckJCRAYWHhuMlkou5NxUeRJhIIBG+r1Wobz/MRP7+4uDhoaGiA/fv3L1o8BKVSCYcOHYLMzEzo7e0FjuPA4XBQhJB37xPQ6XQbysvL26ampuaUlZWVgV6vh7Vr1y467j9RUlICX331FSQkJMDZs2dDCzMQCLwTRkCtVicqFIo3zWYzCKbFp1FSUgKff/YZqNXqeRO4fPkyfPvtt3Djxo0Fn9VqtaDX66G8vBwuXboEnZ2dQAh5OYxA9eTk5F/r16+HU6dOzRlcWFgIn3zyCeTm5s6bwI0bN+Do0aNw4sQJGB0djWhOtVoNr732GjQ0NMDFixfB6XTSNE2/H0ZAo9HEdXZ2fujz+V6qr68P28UwxlBVVQUffvghaLXaiAjYbDb48ccf4ciRI2AymRYVVpqm4cUXX4R33303tERdLtdvYQQIIaqpqalGhmE+am5uVu3YsQOWL18+M6BGo4F3330XXn/9dVCpVPMmdvv2bfj+++/h0KFD4HQ6I3JeLBbDli1boK6uDlQqFTgcjl8IIX+EERgfHx8aGhr6RqVSfdjU1CSpqKiA/Px8oGka0tPTYe/evfDCCy9AUlLSvJ3v7u6G48ePw48//ghWqzUi5yUSCWzduhXq6uogLS0NbDZbPwC0zR5L7p3nt1paWnIyMjJWKJVKaXx8vITjuAmbzXblb1OWYRjmJgCMLzkB4CH+z/gLQWXQj7DqrzAAAAAASUVORK5CYII=';

// 添加默认图片处理
window.addEventListener('load', function() {
    // 添加临时CSS
    const style = document.createElement('style');
    style.textContent = `
        .default-img-styles {
            background-size: 50% !important;
            background-repeat: no-repeat !important;
            background-position: center !important;
            background-color: #f0f0f0 !important;
        }
    `;
    document.head.appendChild(style);
    
    // 处理网站图标
    const faviconLinks = document.querySelectorAll('link[rel*="icon"]');
    if (faviconLinks.length) {
        faviconLinks.forEach(link => {
            link.href = defaultFavicon;
        });
    } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = defaultFavicon;
        document.head.appendChild(newFavicon);
    }
    
    // 添加Base64编码的默认游戏图片
    for (let i = 0; i < games.length; i++) {
        games[i].image = defaultGameImage;
    }
    
    // 修改游戏卡片图片样式
    document.addEventListener('DOMContentLoaded', function() {
        const gameImages = document.querySelectorAll('.game-image');
        gameImages.forEach(image => {
            image.classList.add('default-img-styles');
        });
    });
});

/**
 * 注意：以下是保留的原有脚本内容
 * 复制此脚本内容时，请确保保留以下所有代码和注释
 */

// 游戏类别中文描述
const categoryLabels = {/* ... 保留原有代码 ... */}; 