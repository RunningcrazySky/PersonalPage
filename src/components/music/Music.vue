<template>
  <div class="box">
    <audio ref='audio' v-if="musicUrl" loop>
        <source :src="musicUrl"/>
    </audio>
    <!-- 播放器封面 -->
    <div class="cover" @click="playSong">
        <img src="@/assets/img/profile.jpg" id="music-cover" alt="" :class="isPlaying ? 'rotate' : ''">
        <i class="iconfont icon-kaishi" v-if="!isPlaying"></i>
    </div>
  </div>
</template>

<script>
export default {
    name:'Music',
    data(){
        return{
            musicList:'',
            musicUrl:'',
            musicCover:'',
            isPlaying:false
        }
    },
    async mounted() {
        // 获取歌曲id
        const songs = await this.$axios.get('/song/url', {
            params: {
                id: '33894318'
            }
        })
        const songsData = songs.data;
        if (songsData) {
            this.musicUrl = songsData[0].url
        };
        // 获取歌单封面
        // const cover = await this.$axios.get('/playlist/cover/update', {
        //     params: {
        //         id: '38984318',
        //         imgSize:50
        //     }
        // })
    },
    methods:{
        playSong(){
            const audio = this.$refs.audio;
            // console.log(audio, 'audio')
            this.isPlaying = !this.isPlaying
            this.isPlaying ? audio.play() : audio.pause()
        }
    }
}
</script>

<style lang='less' scoped>
    .box{
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 1%;
        bottom: 150px;
        .cover{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background:white;
            cursor: pointer;
            img{
                width: 100%;
                border-radius: 50%;
            }
            .iconfont{
                position: relative;
                font-size: 30px;
                line-height: 50px;
                color: rgba(255, 255, 255, .8);
                top: -55px;
            }
            &:hover .iconfont{
                color: var(--white);
                transition: linear .3s;
            }
        }
        .lyric{
            // display: inline-block;
            text-align: center;
            background-color: var(--main-bg-color);
            width: 200px;
            padding: 5px 10px;
            font-size: 14px;
            margin-left: 5px;
            border-radius: 20px;
        }
    }
    .rotate{
        animation: rotate 3s infinite linear ;
    }
</style>