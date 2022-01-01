import CloseIcon from "@mui/icons-material/Close";
import { Card, CardContent, CardMedia, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PostGallery from "./PostGallery";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog
        fullScreen
        open={!!open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          <Card sx={{ maxWidth: "full" }}>
            <CardMedia
              component="img"
              height="400"
              image="https://source.unsplash.com/random"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                story
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                deserunt quisquam eaque quae? Voluptas obcaecati eligendi hic
                totam sint labore placeat maxime, est magnam deleniti incidunt,
                temporibus nisi sapiente fuga ex accusantium necessitatibus
                vitae nobis a libero. Impedit cumque rem molestias, odit ex quae
                velit harum eos? Facilis enim unde perspiciatis aliquid sunt
                numquam necessitatibus repudiandae repellendus architecto.
                Maiores veritatis suscipit consectetur est aspernatur labore,
                fugit at animi modi repellendus accusamus neque quae dolores
                non, excepturi voluptas iure vel voluptates voluptatibus, sequi
                aperiam eligendi! Praesentium laudantium nam perspiciatis
                adipisci ipsa. Mollitia, iusto. Obcaecati accusantium ut rerum
                exercitationem perferendis vel quod!a Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Impedit facilis earum
                molestias deserunt, adipisci at dolorum provident distinctio
                voluptatibus saepe et quisquam aspernatur pariatur numquam nihil
                animi iure voluptates quia ipsam aliquid exercitationem nulla
                rem quod? Nesciunt aliquam, iste corrupti odio aut excepturi
                cumque deserunt earum adipisci, repudiandae nostrum nam ratione
                ab eligendi quidem eveniet debitis facere vero doloremque nisi
                at. Repudiandae, quibusdam doloribus inventore, sit enim illo
                distinctio tempore beatae explicabo vel delectus cumque esse
                maxime ex officia architecto saepe hic labore perspiciatis,
                officiis provident. Laborum, mollitia similique! Odio quasi ex
                eius neque nemo laudantium vero cupiditate. Magnam doloremque
                eum rerum quos corporis blanditiis dolorum velit quo illum iste
                enim cumque tempora hic, cupiditate ex. Iure nisi voluptatem
                repellat ad sequi fugiat impedit, dignissimos a quia molestiae
                temporibus perferendis vitae! Aliquid error maiores facere nemo
                beatae tenetur, quasi harum doloremque. Consectetur quisquam
                laborum cumque sed explicabo ipsam eum ut illo est. Officia
                dolores recusandae minima at, nihil natus omnis voluptas
                aspernatur laudantium accusantium alias aut asperiores neque
                unde dicta maxime fugit. Odio aut laudantium a voluptatem rerum
                sed provident officia ipsam maiores illo tenetur facilis
                accusantium optio nulla, atque modi vel rem earum nesciunt quam.
                Doloribus, inventore quia ipsam veritatis perferendis non dolore
                laborum architecto, nesciunt numquam placeat accusamus ullam
                odit? Eos iusto laborum ipsa officia veniam facilis deserunt
                obcaecati eum animi corporis, voluptas quo quod ratione modi
                fugiat aperiam beatae vero dignissimos sit debitis consequatur
                unde nisi! Ducimus accusamus laborum quam dolor excepturi
                quaerat corporis officia dignissimos quisquam labore atque vero
                aliquam obcaecati possimus, fugiat quasi facilis dolore nam
                tempora? Recusandae iste incidunt blanditiis maxime est
                reprehenderit commodi autem sunt et inventore repellendus dolor,
                perferendis expedita. Veniam numquam, facilis voluptas soluta
                nesciunt cupiditate exercitationem non deserunt accusantium
                quidem sit, mollitia eos sint, laboriosam tenetur repellat hic
                dolorem ea neque unde in asperiores error delectus praesentium!
                Ea, labore iusto? Ab autem voluptatibus aperiam porro nobis
                sequi facilis cum ea beatae magnam ipsam facere minus sunt
                exercitationem et iusto iste excepturi consectetur,
                reprehenderit aliquid, doloribus minima. Architecto recusandae,
                beatae sed veritatis eligendi eius. Deleniti, quos voluptatibus,
                asperiores provident optio illo perspiciatis harum tempore vitae
                sunt porro. Suscipit commodi explicabo laudantium eveniet
                nostrum officia quo perferendis architecto. Earum, vero facere
                quibusdam dolore explicabo quia, voluptas adipisci eum fuga iste
                illo necessitatibus temporibus corrupti magni rerum consequuntur
                iure. Praesentium, neque alias eum vel dolorum suscipit eaque,
                dolores sed esse assumenda maxime delectus laudantium placeat
                tempore? Dolore placeat quidem, quaerat exercitationem animi
                saepe asperiores eligendi quae libero culpa nemo iusto
                repudiandae nostrum sint iste reiciendis at temporibus id ipsa
                eius dignissimos consequatur veniam error. Quae quod eveniet
                quisquam earum quia. Minima eaque quas voluptatum dolor delectus
                dolorem, nemo, hic rem quia tempora explicabo unde itaque
                distinctio ex asperiores eius, repudiandae odit veniam commodi
                cum autem assumenda molestiae quidem? Minima iste ipsam laborum
                placeat at fugit, recusandae natus quo, sint omnis animi!
                Laudantium cum debitis, quos praesentium natus, odit molestiae
                accusantium officia ut adipisci velit quis rem perferendis sit,
                tempore aspernatur perspiciatis provident? Expedita natus nisi
                at accusantium eum cupiditate placeat debitis molestiae,
                suscipit illo aut rerum. Ipsa, porro minima. Sunt, perferendis.
                Modi ipsum eveniet, laborum saepe inventore repellat enim
                cupiditate animi unde nobis eum dolore voluptatum incidunt dolor
                similique, quae vel praesentium. Asperiores ea, accusantium odit
                nam veritatis qui, pariatur excepturi non esse repellendus cum
                modi tempora! Consequatur commodi totam aliquid quisquam optio
                dolorum ut velit explicabo deserunt impedit in delectus odit
                recusandae eveniet earum cum voluptatem, exercitationem
                praesentium quaerat unde eligendi? Eius dolorem consequatur,
                nihil placeat voluptatum laborum! Neque aliquam earum,
                praesentium provident incidunt id nihil delectus dignissimos
                repellendus ut, debitis quas commodi ex! Voluptas explicabo
                quasi, perferendis officia eum, corrupti commodi et fuga eos
                dolorum corporis vitae! Quod, illo repudiandae. Ut nemo
                voluptatibus explicabo dignissimos nam. Voluptate, nesciunt quas
                laborum dolore id architecto ratione fugit ut? Consequuntur,
                quaerat quas. Ab asperiores harum, consequuntur ipsum nesciunt,
                omnis hic assumenda nobis nostrum nihil nisi dolorem quibusdam
                laudantium dolorum aliquam explicabo! Minima, nostrum ratione
                aperiam aliquid repellendus eaque! Omnis, aliquid ex accusantium
                quia dicta eius debitis? Repellat voluptatum laboriosam dicta
                officiis tempore. Unde labore deleniti ab culpa, sunt beatae
                cumque iusto consectetur nemo ea ipsum fugiat quibusdam, nam ex
                soluta dignissimos vel distinctio ad quis dolore quas
                consequatur! Cumque veritatis blanditiis vero expedita quisquam
                deleniti beatae aspernatur omnis odit quae quibusdam aut
                eligendi dolorem voluptas possimus, asperiores optio? Architecto
                maxime vitae aliquid aperiam at accusamus reiciendis labore
                officiis ipsam, ratione nemo id ea itaque? Ullam quae
                repellendus pariatur quaerat eos vel nulla eveniet. Itaque
                fugiat tempora, quaerat dolores cum commodi eveniet nesciunt
                accusantium suscipit corporis laudantium repudiandae quod, vel
                ducimus odio beatae autem, quisquam consectetur eligendi labore
                quibusdam. Consectetur saepe fuga officiis, quisquam quos
                explicabo pariatur modi dolor laborum laudantium, enim aliquid
                blanditiis eius sed ducimus nesciunt qui distinctio sunt natus
                sint minima expedita tenetur? Aut at qui quae similique, quod
                placeat fugiat animi. Ullam non voluptatum quasi repudiandae qui
                nostrum magni magnam. At ipsa quasi, quisquam ut praesentium
                consectetur consequatur tempora tempore blanditiis veniam illum
                pariatur. Modi aliquam commodi iusto eum, explicabo esse,
                accusamus voluptate delectus dolorem facere porro consequatur
                rerum nemo adipisci, dicta natus? Ipsum dolor cupiditate, illo
                quam recusandae minima earum molestias et magnam cum, voluptate
                iure fugit consectetur asperiores qui deleniti natus fugiat
                voluptatum dignissimos alias quaerat at? Vel, rem vero ratione
                dolore est consequatur odit earum dignissimos quasi officia
                accusamus consectetur accusantium consequuntur quisquam
                excepturi corrupti deleniti soluta delectus.
              </Typography>
              <PostGallery />
            </CardContent>
          </Card>
        </Container>
      </Dialog>
    </div>
  );
}
