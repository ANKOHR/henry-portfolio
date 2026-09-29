(() => {
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const expanded=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!expanded));
      nav.classList.toggle('open',!expanded);
    });
    nav.addEventListener('click',event=>{
      if(event.target.closest('a')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
    });
  }
  const contactForm=document.querySelector('[data-contact-form]');
  if(contactForm)contactForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const button=contactForm.querySelector('[type="submit"]');
    const status=contactForm.querySelector('[data-form-status]');
    if(button.disabled||!contactForm.reportValidity())return;
    button.disabled=true;contactForm.setAttribute('aria-busy','true');
    status.textContent='Sending message...';status.removeAttribute('data-state');
    const controller=new AbortController();
    const timeout=window.setTimeout(()=>controller.abort(),20000);
    try{
      const response=await fetch(contactForm.action,{
        method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({...Object.fromEntries(new FormData(contactForm)),_subject:'Portfolio message'}),
        signal:controller.signal
      });
      const result=await response.json();
      if(!response.ok||(result.success!==true&&result.success!=='true'))throw new Error('Message not accepted');
      status.textContent='Message sent. Thank you for getting in touch.';status.dataset.state='success';
      contactForm.reset();
    }catch(error){
      status.textContent='Could not send your message. Please try again, or contact me by email or WhatsApp.';
      status.dataset.state='error';
    }finally{
      window.clearTimeout(timeout);button.disabled=false;contactForm.removeAttribute('aria-busy');
    }
  });
  const workCards=[...document.querySelectorAll('[data-work-card]')];
  const workButtons=[...document.querySelectorAll('[data-work-filter]')];
  const sortSelect=document.querySelector('[data-work-sort]');
  let workFilter='all';
  const updateWork=()=>{
    workCards.forEach(card=>{
      const categories=(card.dataset.category||'').split(' ');
      card.classList.toggle('hidden-card',workFilter!=='all'&&!categories.includes(workFilter));
    });
    const grid=document.querySelector('.work-grid');
    if(sortSelect&&grid){
      const cards=workCards.filter(card=>card.closest('.work-grid')&&!card.classList.contains('hidden-card'));
      if(sortSelect.value==='name')cards.sort((a,b)=>a.dataset.name.localeCompare(b.dataset.name));
      else cards.sort((a,b)=>Number(a.dataset.order)-Number(b.dataset.order));
      cards.forEach(card=>grid.append(card));
    }
  };
  workButtons.forEach(button=>button.addEventListener('click',()=>{
    workFilter=button.dataset.workFilter;
    workButtons.forEach(item=>item.classList.toggle('active',item===button));
    updateWork();
  }));
  if(sortSelect)sortSelect.addEventListener('change',updateWork);
  const labCards=[...document.querySelectorAll('[data-lab-card]')];
  const labInput=document.querySelector('[data-lab-search]');
  const labFilters=[...document.querySelectorAll('[data-lab-filter]')];
  let labFilter='all';
  const updateLab=()=>{
    const query=(labInput?.value||'').trim().toLowerCase();let visible=0;
    labCards.forEach(card=>{
      const matchesText=card.textContent.toLowerCase().includes(query);
      const matchesStatus=labFilter==='all'||card.dataset.status===labFilter;
      card.classList.toggle('hidden-card',!(matchesText&&matchesStatus));
      if(matchesText&&matchesStatus)visible+=1;
    });
    const empty=document.querySelector('[data-lab-empty]');if(empty)empty.style.display=visible?'none':'block';
  };
  if(labInput)labInput.addEventListener('input',updateLab);
  labFilters.forEach(button=>button.addEventListener('click',()=>{
    labFilter=button.dataset.labFilter;
    labFilters.forEach(item=>item.classList.toggle('active',item===button));updateLab();
  }));
  const articleInput=document.querySelector('[data-writing-search]');
  const articleCards=[...document.querySelectorAll('[data-article-card]')];
  const articleTabs=[...document.querySelectorAll('[data-writing-filter]')];
  let articleFilter='all';
  const updateArticles=()=>{
    const query=(articleInput?.value||'').trim().toLowerCase();let visible=0;
    articleCards.forEach(card=>{
      const matchesText=card.textContent.toLowerCase().includes(query);
      const matchesType=articleFilter==='all'||(card.dataset.type||'').split(' ').includes(articleFilter);
      card.classList.toggle('hidden-card',!(matchesText&&matchesType));if(matchesText&&matchesType)visible+=1;
    });
    const empty=document.querySelector('[data-writing-empty]');if(empty)empty.style.display=visible?'none':'block';
  };
  if(articleInput)articleInput.addEventListener('input',updateArticles);
  articleTabs.forEach(button=>button.addEventListener('click',()=>{
    articleFilter=button.dataset.writingFilter;
    articleTabs.forEach(item=>item.classList.toggle('active',item===button));updateArticles();
  }));
  if(articleInput)document.addEventListener('keydown',event=>{
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();articleInput.focus();}
    if(event.key==='Escape'&&document.activeElement===articleInput){articleInput.value='';updateArticles();articleInput.blur();}
  });
  document.querySelectorAll('.code-tabs').forEach(tablist=>{
    const panel=tablist.parentElement.querySelector('[role="tabpanel"]');
    const output=panel?.querySelector('[data-code-output]');
    const templates=[...tablist.parentElement.querySelectorAll('template[data-code-panel]')];
    const buttons=[...tablist.querySelectorAll('[data-code-tab]')];
    const selectTab=button=>{
      const template=templates.find(item=>item.dataset.codePanel===button.dataset.codeTab);
      if(!template||!output)return;
      output.replaceChildren(...template.content.firstElementChild.cloneNode(true).childNodes);
      buttons.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active));});
    };
    buttons.forEach((button,index)=>{
      button.addEventListener('click',()=>selectTab(button));
      button.addEventListener('keydown',event=>{
        if(event.key!=='ArrowRight'&&event.key!=='ArrowLeft')return;
        event.preventDefault();const step=event.key==='ArrowRight'?1:-1;
        const next=buttons[(index+step+buttons.length)%buttons.length];next.focus();selectTab(next);
      });
    });
  });
  const runButton=document.querySelector('[data-eval-run]');
  const evalGraph=document.querySelector('[data-eval-graph]');
  const runStatus=document.querySelector('[data-run-status]');
  if(runButton&&evalGraph&&runStatus)runButton.addEventListener('click',()=>{
    if(runButton.disabled)return;
    runButton.disabled=true;runButton.textContent='Running...';runButton.setAttribute('aria-busy','true');
    runStatus.textContent='Animating the illustrative chart. No evaluation is running.';
    evalGraph.classList.remove('is-running');void evalGraph.offsetWidth;evalGraph.classList.add('is-running');
    window.setTimeout(()=>{
      evalGraph.classList.remove('is-running');runButton.disabled=false;runButton.textContent='Run Evaluation';runButton.removeAttribute('aria-busy');
      runStatus.textContent='Example animation complete. No evaluation has been run.';
    },1100);
  });
})();
