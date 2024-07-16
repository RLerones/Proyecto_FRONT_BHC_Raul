## BLOQUE 1
1. Inst repositorio [back](https://github.com/bgonzalezBio/curso.git)
2. Inst [angular cli](https://v17.angular.io/cli)

## BLOQUE 2
1. [APIs](https://pokeapi.co/docs/v2#pokemon)

## BLOQUE 3 ANGULAR
0. Typescript
1. Estructura del repo y cli
2. Interfaces y clases
3. Componentes
4. Servicios
5. Ciclos de vida del componente0


## CHALLENGE
0. Generar un nuevo [repositorio de angular]() usando angular cli
1. Instalar [Angular Material](https://material.angular.io/guide/getting-started)
2. Generar un servicio usando Angular CLI que se llame httpService
3. Crear un método [GET](https://v17.angular.io/guide/http-request-data-from-server#handle-data-access-in-a-service-class) en dicho servicio que traiga un listado de [pokemons](https://pokeapi.co/docs/v2#pokemon)
4. Geneara un componente [tabla](https://material.angular.io/components/table/overview) para el modelo Pokemon
```
export interface Pokemon {
  id: number;
  name: string;
}
```
5. En el on init del componente tabla realizar una llamada al servicio httpService que devuelva un listado de pokemons y printear la respuesta mediante un console.log()
6. Usar la respuesta del servicio del httpService para imprimir el dato en el componente tabla

## CHALLENGE 2.0
1. Generar un componente logIn usando Angular CLI
2. Generar un formulario con los campos usuario y contraseña usando [FormBuilder](https://angular.dev/guide/forms/reactive-forms#using-the-formbuilder-service-to-generate-controls) e [inputs de angular material](https://material.angular.io/components/form-field/overview)
3. Trabajar el shell de la app para que sea navegable
4. Generar un metodo log in en el componente logIn, que navegue a la lista de pokemons al clickar en un boton
