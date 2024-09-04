
export default {
    props: {
        experience: Object,
        githubShort:String,
        linkedinShort:String,
        showHr:Boolean
    },
    components: {

    },
    template: `
        <div>
            <div class="flex justify-between pb-2">
                <div>
                    <p class="font-semibold">{{experience.company}}</p>
                    <p class="text-xs font-semibold text-gray-700">{{experience.title}}</p>
                </div>

                <div class="flex space-x-1 text-xs">
                    <p class="font-semibold text-gray-700">{{experience.location}}</p>
                    <span>|</span>
                    <p class="text-gray-500">{{experience.duration}}</p>
                </div>
            </div>

            <ul class="list-disc text-pretty font-mono text-xs ml-4">
                <li v-html="item" class="description" v-for="(item, index) in experience.bullets" :key="index">
                    {{item}}
                </li>
            </ul>
            <hr v-if="showHr" class="my-4"/>
        </div>
    `
}
