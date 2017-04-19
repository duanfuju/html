$(function() {

    // 播放器
    var Player = {
        // 歌曲路径
        path : 'music/',

        // 歌曲数据
        data : null,

        // 当前播放歌曲的 索引
        currentIndex : -1,

        //  播放器元素jquery对象
        $audio : $('audio'),

        // 歌曲列表
        $mList : $('#m-list'),

        //正在播放的歌曲
        $rmusic : $('#rmusic'),

        // 初始化 数据
        init : function() {

            // 数据一般来自服务器端,通过ajax 加载数据,这里是模拟
            Player.data = ['Faded.mp3','MAMA.MP3','Undo (Live)-Sanna Nielsen.mp3','凛として時雨-unravel.mp3','周杰伦-夜曲(柔情版).mp3',
            '夏婉安 - 一个人.mp3','夜曲.mp3','孙羽幽 - 有点甜.mp3','张杰 - 最接近天堂的地方.mp3','影视原声-白雪みぞれ snowstorm.mp3',
            '徐良 - 客官不可以.mp3','徐良+小暖-红装(Remix版).mp3','徐良-客官不可以(Remix).mp3','无双.mp3','星之歌.mp3','星辰变.mp3',
            '朱婧-为爱追寻(《梦幻西游2》主题曲).mp3','李荣浩 - 李白.mp3','杨丞琳 - 青春斗.mp3','杨幂 - 生生世世爱.mp3','格子兮 - 异地恋.mp3',
            '格子兮 - 蹁跹.mp3','江映蓉 - 坏天使.mp3','牛奶咖啡 - Next World.mp3','痞克四 - 诛仙剑 (诛仙OnLine主题曲).mp3',
            '萧敬腾 - 王妃.mp3','萧风-贝多芬的悲伤.mp3','许佳慧-预谋.mp3','许嵩 - 多余的解释.mp3','许嵩 - 玫瑰花的葬礼.mp3',
            '素颜.mp3','郁可唯-时间煮雨(电影《小时代》主题曲).mp3','韦欢-战舞.mp3'];

            // 一般用模板引擎,把数据 与 模板 转换为 视图,来显示,这里是模拟
            var mhtml = '';
            var len = Player.data.length;
            for (var i = 0; i < len; i++) {
                mhtml += '<li><a index="' + i + '">' + Player.data[i] + '</a></li>';
            }
            Player.$mList.html(mhtml);
        },

        // 就绪
        ready : function() {
            // 控制

            Player.audio = Player.$audio.get(0);

            $('#ctrl-area').on('click', 'button', function() {
                Player.$rmusic.html(Player.data[Player.currentIndex]);
            });

            // 播放
            $('#btn-play').click(function() {
                Player.audio.play();
                if (Player.currentIndex == -1) {
                    $('#btn-next').click();
                }
            });

            // 暂停
            $('#btn-pause').click(function() {
                Player.audio.pause();
            });

            // 下一曲
            $('#btn-next').click(function() {
                if (Player.currentIndex == -1) {
                    Player.currentIndex = 0;
                } else if (Player.currentIndex == (Player.data.length - 1)) {
                    Player.currentIndex = 0;
                } else {
                    Player.currentIndex++;
                }
                console.log("Player.currentIndex : " + Player.currentIndex);
                Player.audio.src = Player.path + Player.data[Player.currentIndex];
                Player.audio.play();
            });

            // 上一曲
            $('#btn-pre').click(function() {
                if (Player.currentIndex == -1) {
                    Player.currentIndex = 0;
                } else if (Player.currentIndex == 0) {
                    Player.currentIndex = (Player.data.length - 1);
                } else {
                    Player.currentIndex--;
                }
                Player.audio.src = Player.path + Player.data[Player.currentIndex];
                Player.audio.play();
            });

            // 单曲循环
            $('#btn-loop').click(function() {
                console.log("Player.currentIndex :", Player.currentIndex);
                Player.audio.onended = function() {
                    Player.audio.load();
                    Player.audio.play();
                };
            });

            // 顺序播放
            $('#btn-order').click(function() {
                console.log("Player.currentIndex :", Player.currentIndex);
                Player.audio.onended = function() {
                    $('#btn-next').click();
                };
            });

            // 随机播放
            $('#btn-random').click(function() {
                Player.audio.onended = function() {
                    var i = parseInt((Player.data.length - 1) * Math.random());
                    playByMe(i);
                };
            });

            // 播放指定歌曲
            function playByMe(i) {
                console.log("index:", i);
                Player.audio.src = Player.path + Player.data[i];
                Player.audio.play();
                Player.currentIndex = i;
                Player.$rmusic.html(Player.data[Player.currentIndex]);
            }

            // 歌曲被点击
            $('#m-list a').click(function() {
                playByMe($(this).attr('index'));
            });
        }
    };

    Player.init();
    Player.ready();

});
