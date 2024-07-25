import { FC, SVGProps } from 'react';

export const SharpIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 9"
      {...props}
   >
      <path d="M2.13281 0C1.2909.00967.19073.16134.13671.91016c-.05637.7841 1.05899.97263 1.79102 1.14257.71371.16716 1.38477.22581 1.38477.47266 0 .17412-.23736.31067-.86133.26367-.75037-.05645-1.3893-.26148-2.02734-.57812L0 2.90625c.70733.27683 1.63478.49772 2.4707.51172.99297.01627 2.1139-.1434 2.13868-.99414.02074-.70997-.71302-.9573-2.00782-1.20899-.63035-.12222-1.16601-.19997-1.16601-.4043 0-.22741.43294-.28495 1.04687-.21874.58087.06107 1.12949.21187 1.64063.42968l.38672-.63671C4.09687.22729 3.24667.02678 2.4746.0039 2.3687.0008 2.25309-.0014 2.1328 0zm14.73242.00586c-.8885 0-1.46056.05966-1.94726.14258V3.3203h1.09375V.62891c.3935-.07757.7918-.07909.9414-.07227.4335.01972.67765.08583.87305.22461.2012.14296.25564.46133-.00586.68164-.1956.16481-.59372.29463-1.48242.1582l-.125.20704 1.67969 1.49218h1.48828l-1.49414-1.29297c.3593-.04575.9025-.19115 1.1621-.53125.2606-.34106.22547-.84051-.27343-1.12695-.466-.26664-1.35496-.36328-1.91016-.36328zm4.75391 0c-.8891 0-1.46848.05966-1.95508.14258V3.3203h1.0918V2.15625c.3374.05667.76135.09097 1.12695.0879.8944-.00719 1.55833-.21792 1.86133-.54688.4311-.46877.28732-1.03473-.20898-1.32813-.4447-.26276-1.27732-.36328-1.91602-.36328zM4.9961.10352v3.2168h1.09375V2.02733h2.11329V3.3203h1.09375V.10351H8.20313v1.22852h-2.1133V.10352H4.9961zm6.46094 0-1.95898 3.2168h.83593l.4004-.65821h2.2578l.38868.6582h1.33398L12.75586.10351h-1.29883zm10.24805.45312c.4368.01826.69.09155.8789.22461.1969.13768.2629.4704-.0039.68945-.1889.1544-.4658.20828-.9004.20703-.3214-.00139-.65342-.0595-.92382-.12109V.62891c.3934-.07757.80032-.0782.94922-.07227zm-9.82422.2207.73828 1.25H11.1211l.75977-1.25zM18.61719 5.25c-.0059-.00016-.01238.0011-.01758.0039l-.2793.13087h-.00195l-.00195.00195c-.0056.0029-.01048.00639-.01368.01172-.0033.00534-.0039.01133-.0039.01758 0 .01239.00562.02336.01562.0293.0837.05623.10547.0877.10547.20898v1.47265c0 .22427-.00364.25272-.11914.27149l-.04101.00586c-.0104.00058-.02025.00418-.02735.01172-.0071.00755-.00986.01699-.00976.02734 0 .02214.01666.04101.03906.04101h.54492c.0224 0 .04102-.01887.04102-.04101 0-.0104-.00452-.0198-.01172-.02734-.0071-.00754-.01695-.01118-.02735-.01172l-.04101-.00586c-.1153-.01884-.11719-.0473-.11719-.27149v-1.8418c.0001-.0059-.0011-.0124-.0039-.01757-.0029-.00517-.00858-.01061-.01368-.01367-.005-.00307-.00972-.00375-.01562-.00391zm-8.57813.1211c-.64146 0-1.10937.47716-1.10937 1.0996 0 .56048.41813 1.0547 1.10937 1.0547.6005 0 1.08008-.45743 1.08008-1.08595 0-.54766-.36138-1.06836-1.08008-1.06836zm-4.35937.041c-.2775 0-.4837.00886-.64844.02345-.00998.00087-.01878.00419-.0254.01172a.03911.03911 0 0 0-.00976.02734c.00044.01.0045.02042.01172.02734.00723.00693.01734.00977.02735.00977l.07421.00781c.13995.0124.1504.0765.1504.30664v1.18164c0 .32676-.0052.36262-.16993.39063l-.05664.00781c-.00989.00058-.01858.00647-.02539.01367-.0068.0072-.01168.01548-.01172.0254a.03923.03923 0 0 0 .03907.03906h.73632c.5605 0 .82813-.24252.82813-.60352 0-.33314-.30845-.5218-.47656-.55274.17134-.08555.3164-.2269.3164-.43945 0-.19934-.10283-.325-.23632-.39062-.14018-.07141-.32688-.08594-.52344-.08594zm4.30664.0547c.59432 0 .82031.55465.82031 1.06836-.0001.61313-.35511.89453-.72851.89453-.6133 0-.83594-.59775-.83594-1.0586 0-.68175.42039-.9043.74414-.9043zm-4.2832.04101c.23628 0 .46289.1148.46289.41992 0 .29223-.17077.38605-.48829.39844-.02258.00095-.0415.0018-.05859.00195h-.10351v-.7207c0-.056.0118-.07062.04296-.08008.02808-.0123.07577-.01953.14454-.01953zm6.9375.0254c-.0933 0-.16797.06554-.16797.16796 0 .08438.0619.15625.1582.15625.0873 0 .16601-.05.16601-.1621 0-.08703-.06274-.16212-.15625-.16212zm2.25 0c-.0933 0-.16797.06554-.16797.16796 0 .08438.06345.15625.16015.15625.0871 0 .16407-.05.16407-.1621 0-.08703-.06306-.16212-.15625-.16212zm-3.17579.6289c-.0033.00005-.00696.00022-.00976.00195l-.30274.1504c-.0055.00288-.01037.0064-.01367.01171-.0032.00531-.00576.01137-.00586.01758 0 .01408.00879.02604.02149.03125.0887.0577.0996.08562.0996.20703v.54492c0 .22426-.00188.25272-.11718.27149l-.04102.00586c-.0103.00058-.02014.00419-.02734.01172-.0071.00754-.01162.01695-.01172.02734 0 .02214.01892.04101.04102.04101h.58203c.0228 0 .04101-.01887.04101-.04101 0-.01034-.00276-.01982-.00976-.02734-.0071-.00753-.01705-.01107-.02735-.01172l-.04101-.00586c-.0316-.00528-.08953-.00895-.11133-.02149-.0458-.02617-.04688-.08732-.04688-.25v-.42382c0-.10565.00962-.19475.04102-.23829.0248-.03439.06163-.0625.11133-.0625.0438 0 .09197.0176.13867.04883.0216.01261.03716.02149.06836.02149.0498 0 .13281-.0398.13281-.14258-.0001-.07442-.06262-.125-.14062-.125-.1148 0-.24247.10513-.35157.19531v-.21875c.0001-.00267.001-.00534 0-.00781s-.00395-.00397-.00585-.00586a.01584.01584 0 0 0-.00586-.0039c-.0024-.00103-.00512-.00196-.00782-.00196zm1.02149.01562a.03739.03739 0 0 0-.01758.00391l-.28125.13086h-.00195c-.0056.00279-.01037.00836-.01367.01367-.0033.00531-.00391.01134-.00391.01758 0 .01247.00562.02307.01562.0293.0837.05587.10352.08758.10352.20898v.54492c0 .22427-.00179.25272-.11719.27149l-.04101.00586c-.0104.0006-.02025.00418-.02735.01172-.0072.00753-.01172.01696-.01172.02734 0 .02214.01842.04101.04102.04101h.54492c.0107.00026.01955-.0043.02735-.01171.0078-.00741.01347-.0166.01367-.02735.0003-.01074-.00432-.02152-.01172-.0293-.0074-.00777-.01665-.01146-.02735-.01171l-.04101-.00586c-.115-.01884-.11914-.0473-.11914-.27149v-.91601c0-.00581-.001-.01058-.0039-.01563-.0029-.00506-.00683-.01065-.01173-.01367-.005-.00303-.00982-.00367-.01562-.0039zm2.25 0a.03717.03717 0 0 0-.01758.00391l-.28125.13086h-.00195c-.0054.00281-.01047.00856-.01367.01367-.0032.0051-.00371.0096-.00391.01563-.0002.00602.001.01227.0039.01757.0028.0053.00652.01054.01172.01368.084.05587.10547.08758.10547.20898v.54492c0 .22427-.00394.25272-.11914.27149l-.04101.00586c-.0104.00049-.02015.00418-.02735.01172-.0072.00755-.00966.01689-.00976.02734 0 .02214.01841.04101.04101.04101h.54297c.0223 0 .04102-.01887.04102-.04101 0-.01042-.00452-.01981-.01172-.02734-.0072-.00754-.01695-.01118-.02735-.01172l-.04101-.00586c-.1151-.01884-.11719-.0473-.11719-.27149v-.91601c0-.00586-.00296-.01248-.00586-.01758-.0029-.0051-.00672-.00868-.01172-.01172-.005-.00304-.00972-.0037-.01562-.0039zm.76758 0c-.0058-.0002-.01043.00123-.01563.00391l-.28125.13086h-.00195c-.0051-.00312-.01158-.00374-.01758-.0039-.006-.00018-.01238.00107-.01758.0039-.0053.00282-.00862.00665-.01172.01172-.0032.00507-.00566.01162-.00586.01758a.03569.03569 0 0 0 .00391.01757c.0028.00528.00672.00855.01172.01172.0051.00317.01168.00563.01758.00586a.03556.03556 0 0 0 .01758-.0039c.084.05587.10351.08758.10351.20898v.54492c0 .22427-.00199.25272-.11719.27149l-.04101.00586c-.0104.00054-.02015.00417-.02735.01172-.0071.00754-.01172.01694-.01172.02734 0 .02214.01912.04101.04102.04101h.54492c.0221 0 .03907-.01887.03907-.04101-.0001-.0104-.00257-.0198-.00977-.02734-.0071-.00754-.01694-.01116-.02734-.01172l-.04102-.00586c-.1152-.01884-.11914-.0473-.11914-.27149V6.6504c0-.0901.00647-.13284.04687-.18555.0434-.0593.14723-.10937.26563-.10937.2114 0 .29102.12922.29102.30664v.46484c0 .22427-.0023.25272-.1172.27149l-.041.00586c-.0103.00096-.02055.00598-.02735.01367-.0068.00768-.01007.01707-.00977.02734a.0403.0403 0 0 0 .01172.02735c.0072.00735.01704.01124.02735.01171h.54492c.0224 0 .03906-.01887.03906-.04101-.0001-.01041-.00257-.01981-.00977-.02734-.0072-.00754-.01694-.01116-.02734-.01172l-.04102-.00586c-.1154-.01884-.11914-.0473-.11914-.27149V6.5918c0-.2085-.10488-.38672-.36328-.38672-.1586 0-.3673.0938-.4707.17187v-.16601c0-.00585-.001-.01054-.0039-.01563-.0029-.00509-.00673-.01063-.01173-.01367-.005-.00303-.01177-.0037-.01757-.0039zm-8.27344.02735c-.37346 0-.62695.32035-.62695.70312 0 .13702.0373.28477.13086.40625.09017.1184.2489.20508.45117.20508.16034 0 .38193-.07616.48632-.2832.0011-.00183.00274-.00366.00391-.00586.00313-.00731.00224-.0158 0-.02344-.00225-.00763-.00708-.01508-.01367-.01953-.0066-.00444-.01356-.00664-.02149-.00586-.0079.00077-.01588.00413-.02148.00977-.09655.1214-.18454.1543-.2871.1543-.33315 0-.51563-.26767-.51563-.58204 0-.0777.00304-.08594.08398-.08594h.72656a.03347.03347 0 0 0 .01563-.0039c.00485-.00253.01055-.00528.01367-.00977.00206-.0032.003-.00606.0039-.00976.00617-.0162.01173-.0433.01173-.07813 0-.1865-.17388-.3711-.44141-.3711zm6.23047 0c-.2772 0-.50782.20296-.50782.4707 0 .19898.13358.33147.26368.39063 0 0-.27149.09477-.27149.24023 0 .12844.09589.23217.27149.26758-.3508.14963-.3164.37695-.3164.37695 0 .15564.13447.36133.51757.36133.4042 0 .77539-.24844.77539-.5879 0-.31128-.26115-.34179-.43555-.34179-.1368 0-.2648.00781-.3711.00781-.1461 0-.21874-.05907-.21874-.13085 0-.09032.09972-.14808.13672-.16993.0375.00308.08247.00977.13867.00977.3955 0 .52148-.28114.52148-.4961 0-.05278.00074-.10534-.00586-.1582h.20118c.0357 0 .0625-.02933.0625-.06445.0001-.0084-.00071-.01568-.00391-.02344-.0032-.00776-.00777-.01554-.01367-.02148-.0059-.00594-.01379-.01047-.02149-.01367-.0078-.0032-.01503-.00394-.02343-.00391h-.20899c-.0688 0-.0916-.00738-.1914-.05078a.77806.77806 0 0 0-.29883-.0625zm3.80664 0c-.3684 0-.57813.22078-.57813.38281 0 .02793.01497.04492.04297.04492.0467 0 .13094-.02315.17774-.06054.0248-.01884.02795-.0557.03125-.10547.0062-.09633.12373-.14063.21093-.14063.1929 0 .21785.15638.21485.27149v.1328c0 .04686-.00799.08581-.05469.10157l-.3711.13281c-.1993.0717-.2578.14407-.2578.26563 0 .08717.0367.16394.0957.2168.0531.04685.13495.07226.21875.07226.0845 0 .24334-.03124.36914-.1621.0315.11011.15401.1621.22851.1621.1436 0 .236-.10162.25782-.13281.00019-.00027.00177.00026.00195 0 .00205-.00163.00243-.00368.0039-.00586a.09809.09809 0 0 0 .00196-.0039.02445.02445 0 0 0 .00195-.00977.02527.02527 0 0 0-.02539-.0254c-.00177 0-.00224-.00033-.0039 0-.00502.00103-.0102.0024-.01368.00587-.00149.00082-.00232.00099-.0039.00195-.00698.00425-.01389.00898-.02149.01367-.0244.01196-.05092.0192-.07812.01953-.1211 0-.125-.1313-.125-.27148v-.53711c0-.2459-.10002-.36914-.32422-.36914zm-3.80078.0918c.1895 0 .27734.17687.27734.38867 0 .18952-.0861.32226-.2539.32226-.1495 0-.2832-.1418-.2832-.36328 0-.21137.11006-.34765.25976-.34765zm-6.27149.00195c.18043 0 .24024.10987.24024.19726v.0547c0 .02976-.01486.03515-.0293.03515h-.53516c-.02207 0-.02148-.00947-.02148-.01563.003-.10286.16198-.27148.3457-.27148zm-1.92969.1211h.1797c.49486 0 .61913.28752.61913.5332.00007.31121-.211.43554-.48828.43554-.0931 0-.187-.01626-.2461-.08789-.05923-.06832-.06445-.22774-.06445-.33984v-.54102zm12.10157.48632v.2461c-.003.06517-.0213.11111-.0586.14843-.0311.03153-.12755.07813-.18945.07813-.1587 0-.19727-.13442-.19727-.1875 0-.1212.0918-.16801.2754-.23047l.16992-.05469zm1.57812.25781c-.0995 0-.17578.07759-.17578.1836 0 .10564.08578.17187.17578.17187.1058 0 .17383-.07246.17383-.17187 0-.09986-.06803-.1836-.17383-.1836zm-5.39453.41016h.10547c.2243 0 .35547.08167.35547.27148 0 .1775-.18374.33399-.46094.33399-.2829 0-.41601-.14056-.41601-.3086.0001-.11825.07363-.21494.14843-.26171.0437-.02787.16828-.03516.26758-.03516z" />
   </svg>
);
