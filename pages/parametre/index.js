import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'


const LegalesStyle = styled.div`
padding:50px;
h1{
    color: #000;
    margin-bottom:20px;
    font-size:1.6rem;
}
h2{
    font-size:1.4rem;
    color: #000;
    margin-bottom:30px;
}
h3{
    font-size:1.2rem;
    color: #000;
}
p{
    text-align:justify;
    margin-bottom:30px;
}
.back{
    margin-top: 50px;
}

`
export default function Legales() {
    const router = useRouter()
    return (
        <LegalesStyle id="section3">
            <div>
                <p className="back" onClick={() => router.back()}>
                Retour
                </p>

                <h1>Politique de confidentialité</h1>

                <h2>Généralités</h2>

                <h3>Éditeur</h3>

                <p>festivapp-jk.fr est un site web créé et géré par l&apos;agence fest4all dans le cadre d&apos;un service permettant aux grands-parents et petits-enfants de se retrouver et de renforcer les liens entre elles. Cette page internet à pour objectif de fournir aux utilisateurs l&apos;ensemble des informations concernant le dispositif &apos;festivapp-jk&apos;. Les utilisateurs ont également la possibilité de renseigner leur adresse e-mail afin de recevoir par mail toutes les informations relatives aux nouveautés organisées dans le cadre du dispositif.</p>

                <h3>Lois applicables</h3>

                <p>Conformément au Règlement général sur la protection des données (RGPD), cette politique de confidentialité est conforme aux règlements suivants.

                    Les données personnelles doivent être :</p>
                    <ul>
                        <li> traitées de manière licite, loyale et transparente au regard de la personne concernée</li>
                        <li>collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d&apos;une manière incompatible avec ces finalités</li>
                        <li>adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées</li>
                        <li>exactes et, si nécessaire, tenues à jour</li>
                        <li>conservées sous une forme permettant l&apos;identification des personnes concernées pendant une durée n&apos;excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées</li>
                        <li>traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite.</li>
                    </ul>
                

                <h3>Consentement</h3>

                <p>En utilisant festivapp-jk-tropican.fr vous consentez à accepter les conditions énoncées dans la présente politique de confidentialité ainsi qu&apos;accepter la collecte, l’utilisation et la conservation des données énumérées dans la présente politique.</p>

                <h3>Modifications</h3>

                <p>Cette politique de confidentialité peut être modifiée afin de maintenir la conformité avec la loi et de tenir compte de tout changement à notre processus de collecte de données. Nous vous recommandons de vérifier notre politique de confidentialité régulièrement afin d&apos;être informé de ces dernières mises à jour.</p>


                <h2>Conditions générales d’utilisation</h2>

                <h3>Propriété intellectuelle</h3>

                <p>L&apos;ensemble du contenu écrit, présent sur festivapp-jk-tropican.fr est soumis au droit d&apos;auteur. Vous devez demander l&apos;autorisation des éditeurs du site avant toutes, publication ou copie des ces différents contenus. Toute utilisation du contenu écrit à des fins commerciales et publicitaires est strictement interdite.

                    Toute représentation totale ou partielle du site web festivapp-jk-tropican.fr par quelque procédé que ce soit, sans l’autorisation expresse de ces éditeurs constituerait une contrefaçon et est donc strictement interdite.

                    Les illustrations et images utilisées appartiennent chacune à leur propriétaire respectif.</p>

                <h3>Responsabilité</h3>

                <p>Les sources des informations diffusées sur le site festivapp-jk-tropican.fr sont fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.

                    Les éditeurs du site festivapp-jk-tropican.fr ne peuvent être tenus pour responsables d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l’internaute, suite à une utilisation, à l’accès, ou au téléchargement d&apos;un fichier provenant de ce site.</p>


                <h2>Données personnelles</h2>

                <h3>Collecte</h3>

                    <ul>
                        <li>Si vous décidez de vous inscrire à la newsletter mise en place sur festivapp-jk-tropican.fr vous consentez à fournir une adresse e-mail valide. Veuillez noter que nous collectons uniquement les données nécessaires à l&apos;inscription de notre newsletter.</li>
                        <li>D’autres données sont collectées automatiquement par des services tiers lors de ce site internet. Ce sont avant tout des données techniques. La collecte de ces données est automatique dès que vous entrez sur notre site.</li>

                        Nous ne recueillerons pas de données supplémentaires sans vous en informer au préalable.
                    </ul>

                <h3>Utilisation</h3>

                <p>Les données personnelles recueillies sur le site festivapp-jk-tropican.fr sont utilisées afin d&apos;analyser votre comportement d&apos;utilisateur ainsi qu&apos;assurer un bon fonctionnement de notre service. Nous n&apos;utilisons pas vos données en dehors de ces utilisations.</p>

                <h3>Partage</h3>

                <p>Nous nous engageons à ne pas vendre ou partager vos données avec des tiers, sauf dans les cas suivants :</p>
                    <ul>
                        <li>si la loi l&apos;exige</li>
                        <li>si elle est requise pour toute procédure judiciaire</li>
                        <li>pour prouver ou protéger nos droits légaux.</li>

                        <li>Si vous suivez des hyperliens de festivapp-jk-tropican.fr vers d&apos;autres sites, veuillez noter que nous ne sommes pas responsables et n’avons pas de contrôle sur leurs politiques et pratiques de confidentialité.</li>
                    </ul>
                
                <h3>Mineurs</h3>

                <p>Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des mineurs aux fins de la collecte de données. Les mineurs doivent avoir le consentement d’un représentant légal pour que leurs données soient recueillies, traitées et utilisées.</p>

                <h3>Suppression</h3>

                <p>Vous pouvez à tout moment nous contacter sur l&apos;adresse mail indiqué en bas de page afin de demander la suppression de vos informations personnelles.</p>


                <h3>Politique d’utilisation des cookies</h3>

                <p>Un cookie est un petit fichier, stocké sur le disque dur d’un utilisateur par le site Web. Son but est de recueillir des données relatives à vos habitudes de navigation.

                    Des cookies tiers sont utilisés afin de suivre vos activités quant à l&apos;utilisation de ce site web.

                    Vous pouvez choisir de désactiver les cookies entièrement dans votre navigateur Internet, mais cela peut nuire à votre expérience utilisateur.</p>

                    <p className="back" onClick={() => router.back()}>
                </p>

            </div>

        </LegalesStyle >
    )
}
