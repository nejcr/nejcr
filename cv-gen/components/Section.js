export default {
    props: {
        title: String,

    },
    template: `
        <div>
        

        <div class="relative flex items-center mb-1">
            <h2 class="font-bold uppercase mr-2">{{title}}</h2>
            <div class="flex-grow border-t border-gray-900"></div>
        </div>
        <hr class="border-0 bg-gray-200 dark:bg-gray-700"/>
        </div>
    `
}



