// 游戏数据
const games = [
    {
        id: 1,
        title: "扫雷",
        url: "https://sloane-minesweeper-netlify.netlify.app/",
        category: "puzzle",
        image: "images/games/game-01.jpg",
        description: "经典的扫雷游戏，考验你的逻辑推理能力。点击格子，避开所有地雷，成功标记出所有地雷位置即可获胜。"
    },
    {
        id: 2,
        title: "2048",
        url: "https://ysloaner-2048.netlify.app/",
        category: "puzzle",
        image: "images/games/game-02.jpg",
        description: "风靡全球的数字益智游戏，通过滑动合并相同数字，目标是得到2048或更高的数字块。简单易上手，但需要策略才能获得高分。"
    },
    {
        id: 3,
        title: "迷宫小游戏",
        url: "https://yusloaner-maze.netlify.app/",
        category: "puzzle",
        image: "images/games/game-03.jpg",
        description: "在错综复杂的迷宫中找到出路，锻炼你的方向感和解谜能力。多种难度级别适合不同玩家。"
    },
    {
        id: 4,
        title: "俄罗斯方块",
        url: "https://yusloaner-tetris.netlify.app/",
        category: "arcade",
        image: "images/games/game-04.jpg",
        description: "经典不朽的俄罗斯方块游戏，通过旋转和移动不同形状的方块，填满一行并消除，获得高分。简单的规则，无尽的乐趣！"
    },
    {
        id: 5,
        title: "贪吃蛇",
        url: "https://sloaner-greedysnake.netlify.app/",
        category: "arcade",
        image: "images/games/game-05.jpg",
        description: "控制一条不断成长的蛇，吃掉食物并避免撞到墙壁或自己的身体。简单却充满挑战的经典游戏。"
    },
    {
        id: 6,
        title: "数字华容道",
        url: "https://ysloaner-dhr.netlify.app/",
        category: "puzzle",
        image: "images/games/game-06.jpg",
        description: "经典的数字拼图游戏，通过滑动方块，将打乱的数字重新排列成正确顺序。锻炼你的空间思维和逻辑能力。"
    },
    {
        id: 7,
        title: "数独小游戏",
        url: "https://ysloaner-sudoku.netlify.app/",
        category: "puzzle",
        image: "images/games/game-07.jpg",
        description: "填充9×9网格，使每行、每列和每个3×3子网格都包含1-9的数字。多种难度级别，挑战你的思维能力。"
    },
    {
        id: 8,
        title: "蜘蛛牌",
        url: "https://ysloaner-spidercard.netlify.app/",
        category: "board",
        image: "images/games/game-08.jpg",
        description: "经典的纸牌游戏，通过合理排列牌组，将所有牌按照顺序从国王到A排列。注意：手机端需横屏游玩。"
    },
    {
        id: 9,
        title: "五子棋",
        url: "https://yusloaner-gobang.netlify.app/",
        category: "board",
        image: "images/games/game-09.jpg",
        description: "经典的黑白棋盘对战游戏，先将五个棋子连成一线的玩家获胜。可以与电脑或朋友对战，考验策略和预判能力。"
    },
    {
        id: 10,
        title: "中国象棋",
        url: "https://yusloaner-chiniese-chess.netlify.app/",
        category: "board",
        image: "images/games/game-10.jpg",
        description: "中国传统棋类游戏，双方交替移动棋子，目标是将对方的将军/帅'将死'。规则丰富，策略多变。"
    },
    {
        id: 11,
        title: "打砖块",
        url: "https://ysloaner-block-breaker.onrender.com/",
        category: "arcade",
        image: "images/games/game-11.jpg",
        description: "控制底部平台反弹小球，打破上方的砖块。不同砖块有不同特性，收集道具增强你的能力，充满乐趣的经典游戏。"
    },
    {
        id: 12,
        title: "打地鼠",
        url: "https://ysloaner-whackamole.netlify.app/",
        category: "arcade",
        image: "images/games/game-12.jpg",
        description: "经典街机游戏，地鼠会不断从洞中钻出，玩家需要迅速点击将其打回去。考验反应速度和手眼协调能力。"
    },
    {
        id: 13,
        title: "记忆卡片",
        url: "https://ysloaner-memorycard.netlify.app/",
        category: "puzzle",
        image: "images/games/game-13.jpg",
        description: "翻转卡片，记住每张卡片的位置并找到匹配对。训练你的记忆力和专注力，适合所有年龄段的玩家。"
    },
    {
        id: 14,
        title: "点点连线",
        url: "https://yusloaner-connection.netlify.app/",
        category: "puzzle",
        image: "images/games/game-14.jpg",
        description: "通过连接点阵中的相同颜色点，形成闭环并消除所有点。考验你的空间规划能力和逻辑思维。"
    },
    {
        id: 15,
        title: "推箱子",
        url: "https://sloaner-pushbox.netlify.app/",
        category: "puzzle",
        image: "images/games/game-15.jpg",
        description: "经典的箱子推动游戏，玩家需要将所有箱子推到指定位置，同时避免将箱子推到死角。充满挑战性的益智游戏。"
    },
    {
        id: 16,
        title: "Colorful Sloaner消消乐",
        url: "https://ysloaner-colorful.netlify.app/",
        category: "puzzle",
        image: "images/games/game-16.jpg",
        description: "经典三消游戏，通过交换相邻的彩色方块，连接三个或更多相同颜色的方块消除得分。简单易上手，但需要策略才能获得高分。"
    },
    {
        id: 17,
        title: "太空战机",
        url: "https://ysloaner-space-shooter.netlify.app/",
        category: "action",
        image: "images/games/game-17.jpg",
        description: "控制太空飞船，在宇宙中与敌人作战。躲避敌人的攻击，收集武器升级，消灭尽可能多的敌人。紧张刺激的射击游戏！"
    },
    {
        id: 18,
        title: "3D跑酷",
        url: "https://ysloaner-3dcityparkour.netlify.app/",
        category: "3d",
        image: "images/games/game-18.jpg",
        description: "在3D城市环境中进行跑酷，跳跃障碍物，躲避陷阱，收集金币。测试你的反应速度和技巧水平的3D动作游戏。"
    },
    {
        id: 19,
        title: "3D跳一跳",
        url: "https://yusloaner-3djump.netlify.app/",
        category: "3d",
        image: "images/games/game-19.jpg",
        description: "受微信小游戏启发的3D跳跃游戏，控制角色在不同平台之间跳跃。需要掌握力度和方向，简单有趣但充满挑战！"
    },
    {
        id: 20,
        title: "像素鸟",
        url: "https://ysloaner-pixel-bird.netlify.app/",
        category: "arcade",
        image: "images/games/game-20.jpg",
        description: "控制一只小鸟穿过管道之间的缝隙，避免碰撞。简单的操作方式但具有高难度的挑战性，考验你的反应能力和耐心。"
    },
    {
        id: 21,
        title: "圣诞老人过悬崖",
        url: "https://ysloaner-scotc.netlify.app/",
        category: "arcade",
        image: "images/games/game-21.jpg",
        description: "帮助圣诞老人穿过危险的悬崖，送出礼物。躲避障碍物，收集礼物，获得高分。季节性主题的休闲游戏。"
    },
    {
        id: 22,
        title: "Sloaner 钢琴",
        url: "https://sloaner-piano.netlify.app/",
        category: "music",
        image: "images/games/game-22.jpg",
        description: "在虚拟钢琴上弹奏你喜欢的曲子，支持键盘操作。提供多种乐器音色和录制功能，释放你的音乐创造力。"
    },
    {
        id: 23,
        title: "粒子交互",
        url: "https://sloaner-interactive.netlify.app/",
        category: "puzzle",
        image: "images/games/game-23.jpg",
        description: "与屏幕上的粒子系统互动，创造迷人的视觉效果。移动鼠标或触摸屏幕，看粒子如何反应。放松身心的视觉艺术体验。"
    },
    {
        id: 24,
        title: "井字棋",
        url: "https://sloaner-ttt.netlify.app/",
        category: "board",
        image: "images/games/game-24.jpg",
        description: "经典的二人对战游戏，轮流在3×3网格中放置X或O，先将三个标记连成一线的玩家获胜。简单但有策略性的游戏。"
    },
    {
        id: 25,
        title: "24点小游戏",
        url: "https://ysloaner-24clock.onrender.com",
        category: "puzzle",
        image: "images/games/game-25.jpg",
        description: "数学益智游戏，使用给定的四个数字和基本运算符（加、减、乘、除），使计算结果等于24。锻炼数学思维和计算能力。"
    },
    {
        id: 26,
        title: "投掷飞镖",
        url: "https://dart-throwing-frenzy.lovable.app/",
        category: "arcade",
        image: "images/games/game-26.jpg",
        description: "模拟飞镖投掷游戏，瞄准靶子获得高分。需要掌握力度和角度，考验你的精准度和稳定性。"
    },
    {
        id: 27,
        title: "恐龙快跑",
        url: "https://ysloaner-dinosaur-run.netlify.app/",
        category: "arcade",
        image: "images/games/game-27.jpg",
        description: "基于Chrome离线游戏的复刻版，控制小恐龙跳跃躲避仙人掌和翼龙。随着时间推移速度会越来越快，测试你的反应能力。"
    },
    {
        id: 28,
        title: "围棋",
        url: "https://ysloaner-go.netlify.app/",
        category: "board",
        image: "images/games/game-28.jpg",
        description: "古老的东方战略棋盘游戏，黑白两方交替在棋盘交叉点上放置棋子，通过包围对方棋子获取领地。深厚的策略性，简单的规则。"
    }
];

// 游戏类别中文描述
const categoryLabels = {
    'puzzle': '益智解谜',
    'action': '动作冒险',
    'board': '棋牌类',
    'arcade': '街机',
    'music': '音乐',
    '3d': '3D游戏'
};

// DOM元素
const gamesGrid = document.getElementById('games-grid');
const modal = document.getElementById('game-modal');
const closeBtn = document.querySelector('.close-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

// 添加页面加载动画处理
const loader = document.getElementById('page-loader');

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
    setupEventListeners();
});

// 渲染游戏卡片
function renderGames(gamesArray) {
    gamesGrid.innerHTML = '';
    
    if (gamesArray.length === 0) {
        gamesGrid.innerHTML = '<div class="no-games">没有找到符合条件的游戏</div>';
        return;
    }
    
    gamesArray.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.dataset.id = game.id;
        
        gameCard.innerHTML = `
            <div class="game-image" style="background-image: url('${game.image}')"></div>
            <div class="game-info">
                <span class="game-category">${categoryLabels[game.category] || game.category}</span>
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <a href="${game.url}" target="_blank" class="play-btn">开始游戏</a>
            </div>
        `;
        
        gamesGrid.appendChild(gameCard);
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 游戏卡片点击事件
    gamesGrid.addEventListener('click', (e) => {
        const gameCard = e.target.closest('.game-card');
        
        // 如果点击的是开始游戏按钮，则不显示模态框
        if (e.target.classList.contains('play-btn')) {
            return;
        }
        
        if (gameCard) {
            const gameId = parseInt(gameCard.dataset.id);
            const game = games.find(g => g.id === gameId);
            
            if (game) {
                showGameDetails(game);
            }
        }
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 搜索游戏
    searchBtn.addEventListener('click', searchGames);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchGames();
        }
    });
    
    // 过滤游戏类别
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除其他按钮的active类
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            if (category === 'all') {
                renderGames(games);
            } else {
                const filteredGames = games.filter(game => game.category === category);
                renderGames(filteredGames);
            }
        });
    });
}

// 展示游戏详情
function showGameDetails(game) {
    document.getElementById('modal-title').textContent = game.title;
    document.getElementById('modal-preview').style.backgroundImage = `url('${game.image}')`;
    document.getElementById('modal-description').textContent = game.description;
    
    const modalLink = document.getElementById('modal-link');
    modalLink.href = game.url;
    modalLink.textContent = '立即开始游戏';
    
    modal.style.display = 'block';
    
    // 添加短暂延迟后添加active类，创建过渡效果
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// 搜索游戏
function searchGames() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        renderGames(games);
        return;
    }
    
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm) ||
        categoryLabels[game.category].toLowerCase().includes(searchTerm)
    );
    
    renderGames(filteredGames);
}

// 随机排序数组的函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 为游戏卡片添加随机背景色彩动画效果
function addCardAnimations() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const randomDelay = Math.random() * 2;
        card.style.animationDelay = `${randomDelay}s`;
    });
}

// 添加页面加载动画
window.addEventListener('load', () => {
    // 延迟一小段时间再隐藏加载动画，使过渡更平滑
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
        
        // 随机排序游戏以增加新鲜感
        shuffleArray(games);
        renderGames(games);
        addCardAnimations();
    }, 800);
});

function closeModal() {
    modal.classList.remove('active');
    
    // 等待过渡效果完成后隐藏模态框
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
} 