export default {
    props: {
        info: Object,
        githubShort: String,
        linkedinShort: String
    },
    template: `
        <div className="container mx-2">
    <h1 className="text-center text-3xl font-bold uppercase">{{info.name}}</h1>
    <div className="pt-2 text-center font-mono text-xs">
        <p className="">📍 {{info.place.name}} {{info.place.countryCode}}</p>
        <div className="flex items-center justify-between pt-3 align-middle whitespace-pre px-2">
            <a :href="'tel:' + info.phone" class="inline-flex items-center rounded font-bold  text-gray-600">•{{info.phone}}📱</a>

            <a :href="'mailto:' + info.email" class="inline-flex items-center rounded font-bold  text-gray-600"> •{{info.email}}✉️</a>

            <a :href="info.githubUrl"
               target="_blank"
               className="inline-flex items-center rounded font-bold  text-gray-600">
              •{{githubShort}}</a>
            <a :href="info.linkedInUrl"
               target="_blank"
               className="inline-flex items-center rounded font-bold text-gray-600">
              •{{linkedinShort}}</a>
        </div>
    </div>
    </div>
    `
}



